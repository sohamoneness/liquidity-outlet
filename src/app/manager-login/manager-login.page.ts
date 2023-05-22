import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HelperService } from '../service/helper.service'
import { ApiService } from '../service/api.service';
import { AnalyticsService } from '../service/analytics.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.page.html',
  styleUrls: ['./manager-login.page.scss'],
})
export class ManagerLoginPage implements OnInit {

  type: any = '';
  loginForm !: FormGroup;
  showPsw = false;
  passwordType = 'password';
  submitted = false;

  constructor(private activatedRoute: ActivatedRoute, private _api: ApiService, private helper: HelperService, private navCtrl: NavController, private analyticsService: AnalyticsService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      mobile: new FormControl('', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

  // method return form controls
  get f() {
    return this.loginForm.controls;
  }

  ionViewWillEnter() {
    this.type = this.activatedRoute.snapshot.paramMap.get('type');

  }

  // Method call to show or hide password
  showPassword() {
    this.showPsw = !this.showPsw
    if (this.showPsw == false) {
      this.passwordType = 'password';
    } else {
      this.passwordType = 'text';
    }
  }

  // Method call to login user
  submitLogin(type: any) {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.helper.startLoading();
      const loginData = new FormData();
      loginData.append("mobile", this.loginForm.value.mobile);
      loginData.append("password", this.loginForm.value.password);
      let logintype = this.type == 'manager' ? 'managerLogin' : 'waiterLogin'

      this._api.login(logintype, loginData).subscribe((res: any) => {

        if (res.status == 1) {
          if (res.manager.type == '1') {
            // this.analyticsService.setUser(res.manager.id);
            // this.analyticsService.logEvent(this.loginForm.value.mobile, this.loginForm.value.password);
            this.helper.alertToast("Successfully Login")
            this._api.storeUserLocally(res.manager);
          } else {
            this.helper.alertToast("Successfully Login");
            localStorage.setItem('Liquidity_Outlet_User', JSON.stringify(res.manager));
            this.navCtrl.navigateRoot(['/waiter-order-management']);
          }
        } else {
          this.helper.dismissLoader();
          this.helper.alertToast(res.message)
        }
      }, err => {
        this.helper.alertToast('Something went wrong. Please try again.')
        this.helper.dismissLoader();
      });
    }
  }


}
