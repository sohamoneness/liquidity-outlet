import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/service/api.service';
import { HelperService } from 'src/app/service/helper.service';
import { SpaceValidatior } from 'src/app/service/space.validator';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.page.html',
  styleUrls: ['./add-menu.page.scss'],
})
export class AddMenuPage implements OnInit {
  categoryList: any = [];
  subcategoryList: any = [];
  menuForm !: FormGroup;
  submitted = false;
  menuId: any;
  type: any = '';
  constructor(private _helper: HelperService, private _api: ApiService, private navCtrl: NavController, private activatedRoute: ActivatedRoute) {

    this.menuForm = new FormGroup({
      name: new FormControl('', [Validators.required, SpaceValidatior.cannotContainSpace]),
      desc: new FormControl('', [Validators.required, SpaceValidatior.cannotContainSpace]),
      category: new FormControl('', Validators.required),
      subcategory: new FormControl('', Validators.required),
      lockPrice: new FormControl('', [Validators.required, Validators.pattern('^[1-9][0-9]{0,6}([.][0-9]{2})*$')]),
      highestPrice: new FormControl('', [Validators.required, Validators.pattern('^[1-9][0-9]{0,6}([.][0-9]{2})*$')]),
      lowPrice: new FormControl('', [Validators.required, Validators.pattern('^[1-9][0-9]{0,6}([.][0-9]{2})*$')]),
      currentPrice: new FormControl('', [Validators.required, Validators.pattern('^[1-9][0-9]{0,6}([.][0-9]{2})*$')])
    })
  }

  ngOnInit() {

  }
  ionViewWillEnter() {
    this.menuId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.menuId) {
      this._api.getMenuDetails(this.menuId).subscribe(res => {
        console.log(res);

      })
      this.type = 'Edit'
    } else {
      this.type = 'Add'
    }
    this.getCategory()
  }

  get f() {
    return this.menuForm.controls;
  }

  // Method call to get category list
  getCategory() {
    this._helper.autoLoading();
    this._api.getCategoryList().subscribe((res: any) => {
      if (res.status == '1') this.categoryList = res?.categories;
      this._helper.dismissLoader();
    }, err => this._helper.dismissLoader())
  }

  // Method call to get sub category list after select category
  getSubCategory(event: any) {
    this._api.getSubCategoryList(event).subscribe((ressubCat: any) => {
      console.log(ressubCat);
      if (ressubCat.status == '1') this.subcategoryList = ressubCat?.sub_categories;
      this._helper.dismissLoader();
      console.log('categoryList', this.categoryList);

    })
  }

  // Method call to save menu form

  menuFormSave() {
    this.submitted = true;
    console.log(this.menuForm.value);
    this._api.addMenu(this.menuForm.value).subscribe(res => {
      console.log(res);
      // if (res.error == false) {
      this._helper.alertToast('Successfully added');
      this.navCtrl.back();
      //  }
    })

  }

  //Method call to back page
  back() {
    this.navCtrl.back();
  }

}
