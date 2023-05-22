import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../service/helper.service';
import { ApiService } from '../../service/api.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu-management',
  templateUrl: './menu-management.page.html',
  styleUrls: ['./menu-management.page.scss'],
})
export class MenuManagementPage implements OnInit {
  userDetails: any;
  menuList: any = [];
  constructor(private _helper: HelperService, private _api: ApiService, private alertCtrl: AlertController, private navctrl: NavController) { }

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('Liquidity_Outlet_User') || '{}');
  }

  ionViewWillEnter() {
    this.showMenuList()
  }

  // Method call to show all menu in list
  showMenuList() {
    this._helper.startLoading();
    this._api.getMenuList(this.userDetails.shop_id).subscribe((res: any) => {
      console.log(res);
      if (res.status == "1") this.menuList = res.products;
      this._helper.dismissLoader();
    })
  }

  // edit()
  edit(menuId: any) {
    this.navctrl.navigateForward('/menu-edit/' + menuId)
  }

  // Method call to delete menu 
  deleteMenu() {
    console.log('delete');
    this.alertCtrl.create({
      header: 'Delete Menu',
      message: 'Do you want to delete this menu from the list?',
      backdropDismiss: false,
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Application exit prevented!');
        }
      }, {
        text: 'Delete',
        handler: () => {
          this._api.deleteMenu()
        }
      }]
    })
      .then(alert => {
        alert.present();
      });
  }

}
