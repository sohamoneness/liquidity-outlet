import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HelperService } from '../service/helper.service'
import { ApiService } from '../service/api.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm !: FormGroup;
  showPsw = false;
  passwordType = 'password';
  submitted = false;

  constructor(private activatedRoute: ActivatedRoute, private _api: ApiService, private helper: HelperService, private navCtrl: NavController) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      mobile: new FormControl('', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,3}$')]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

  // method return form controls
  get f() {
    return this.loginForm.controls;
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
  submitLogin() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.helper.startLoading();
      const loginData = new FormData();
      loginData.append("email", this.loginForm.value.email);
      loginData.append("password", this.loginForm.value.password);

      this._api.loginadmin(loginData).subscribe((res: any) => {

        if (res.status == 1) {
          this.helper.alertToast("Successfully Login")
          this._api.storeUserLocally(res.shop);

        } else {
          this.helper.dismissLoader();
          this.helper.alertToast('Something went wrong. Please try again.')
        }
      }, err => {
        this.helper.alertToast('Something went wrong. Please try again.')
        this.helper.dismissLoader();
      });
    }
  }
}
