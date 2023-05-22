import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { HelperService } from '../service/helper.service';
import { ApiService } from '../service/api.service';
import { SpaceValidatior } from '../service/space.validator';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-outlet-account',
  templateUrl: './outlet-account.page.html',
  styleUrls: ['./outlet-account.page.scss'],
})
export class OutletAccountPage implements OnInit {
  userDetails: any;
  updateAccount!: FormGroup;
  submitted = false;
  aadhar_image: any = '';
  panPic: any = '';
  shopPic: any = '';
  GstPic: any = '';
  baseimageUrl = environment.baseimageUrl;

  constructor(private _helper: HelperService, private _api: ApiService, private navCtrl: NavController, private actionSheetController: ActionSheetController, private camera: Camera, private transfer: FileTransfer) {

    this.updateAccount = new FormGroup({
      aadhar_image: new FormControl(''),
      aadhar_no: new FormControl('', [Validators.required, Validators.pattern("[0-9]{12}$")]),
      address: new FormControl('', [Validators.required, SpaceValidatior.cannotContainSpace]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,3}$')]),
      gst_image: new FormControl('', Validators.required),
      gst_no: new FormControl('', [Validators.required, Validators.pattern("[0-9]{12}$")]),
      house_rules: new FormControl('', [Validators.required, SpaceValidatior.cannotContainSpace]),
      image: new FormControl(''),
      name: new FormControl('', Validators.required),
      offer_rate: new FormControl('', [Validators.required, Validators.pattern("[0-9]{12}$")]),
      offer_text: new FormControl('', [Validators.required, SpaceValidatior.cannotContainSpace]),
      pan_image: new FormControl(''),
      pan_no: new FormControl('', [Validators.required, Validators.pattern(/[A-Z]{3}[PCHFATBLJG]{1}[A-Z]{1}[0-9]{4}[a-zA-Z]{1}$/)]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')])
    })
  }

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('Liquidity_Outlet_User') || '{}');
  }

  ionViewWillEnter() {
    this.accountDetails();
  }

  // Method call to get account details
  accountDetails() {
    // this._helper.startLoading();
    this._api.getAccountDetails(this.userDetails.id).subscribe((res: any) => {
      console.log(res);

      if (res.status == '1') {
        this._helper.dismissLoader();
        this.updateAccount.patchValue({
          aadhar_no: res.shop.aadhar_no,
          address: res.shop.address,
          email: res.shop.email,
          gst_image: res.shop.gst_image,
          gst_no: res.shop.gst_no,
          house_rules: res.shop.house_rules,
          image: res.shop.image,
          name: res.shop.name,
          offer_rate: res.shop.offer_rate,
          offer_text: res.shop.offer_text,
          pan_image: res.shop.pan_image,
          pan_no: res.shop.pan_no,
          phone: res.shop.phone,
        })
        this.aadhar_image = res.shop.aadhar_image;
      }
    })
  }

  get f() {
    return this.updateAccount.controls;
  }

  /**
    * Method call to upload image
  */
  async uploadImage(source: string) {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Take a Photo',
        icon: 'camera-outline',
        handler: () => {
          this.takePhoto(1, source);
          // this.selectImageAction(this.camera.PictureSourceType.CAMERA);
        }
      }, {
        text: 'Pick From Gallery',
        icon: 'image-outline',
        handler: () => {
          this.takePhoto(0, source);//photo library
        }
      }, {
        text: 'Cancel',
        role: 'cancel',
        icon: 'close',
        handler: () => {
          // console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  /**
   * Method call to upload image in server
   * @param sourceType is option of take a pic from gallery or click
   * @param sourceImage is option of picture source i.e. 'aadhar','pan', 'profile'
   */

  takePhoto(sourceType: number, sourceImage: string) {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      allowEdit: true, // allow crop image
      sourceType: sourceType,
    }

    this.camera.getPicture(options).then((imageData) => {
      console.log('imageData', imageData);

      if (imageData != "") {
        this._helper.startLoading();
        const fileTransfer: FileTransferObject = this.transfer.create();
        console.log('fileTransfer', fileTransfer);

        //let newName = `${new Date().getTime()}`;
        let options1: FileUploadOptions = {
          fileKey: 'file',
          //fileName: newName + '_traderG.png',
          chunkedMode: false,
          //mimeType: "image/jpeg", // add mimeType
          headers: {},
          params: { "file": imageData },
          httpMethod: 'POST'
        }
        fileTransfer.upload(imageData, 'http://15.207.161.99/api/file/upload', options1)
          .then((data2) => {
            let value = data2.response;
            console.log("value", value);

            setTimeout(() => {
              this._helper.alertToast('Image Uploaded Successfully')
              if (sourceImage == 'PAN') {
                this.panPic = JSON.parse(value).data.fileurl;
                console.log("value", this.panPic);
                // this._changeRef.detectChanges();
                this.updateAccount.patchValue({
                  pan_image: this.panPic
                })
              } else if (sourceImage == 'AADHAR') {
                this.aadhar_image = JSON.parse(value).data.fileurl;
                console.log("value", this.aadhar_image);
                // this._changeRef.detectChanges();

                this.updateAccount.patchValue({
                  aadhar_image: this.aadhar_image
                })
              } else if (sourceImage == 'SHOP') {
                this.shopPic = JSON.parse(value).data.fileurl;
                console.log("value", this.shopPic);
                // this._changeRef.detectChanges();

                this.updateAccount.patchValue({
                  image: this.shopPic
                })
              } else {
                this.GstPic = JSON.parse(value).data.fileurl;
                console.log("value", this.GstPic);
                // this._changeRef.detectChanges();

                this.updateAccount.patchValue({
                  gst_image: this.GstPic
                })
              }
            }, 2000);

            this._helper.dismissLoader();
          }, (err) => {
            console.log('tect', err);
          });
      }
    }, (err) => {
      // Handle error
    });
  }


  // Method call to account update form
  updateProfile() {
    this.submitted = true;
  }

  // Method call to cancel edit
  cancel() {
    this.navCtrl.navigateRoot('/home')
  }

}
