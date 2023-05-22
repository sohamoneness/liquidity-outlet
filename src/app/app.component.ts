import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
// import { FCM } from '@ionic-native/fcm/ngx';
import { FCM } from "cordova-plugin-fcm-with-dependecy-updated/ionic/ngx";
import { FirebaseCrashlytics } from '@ionic-native/firebase-crashlytics/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  isRemainder: any = 0;
  userDetails: any = {};

  constructor(private navCtrl: NavController, private platform: Platform, private fcm: FCM, private firebaseCrashlytics: FirebaseCrashlytics) {
    this.platform.ready()
      .then(() => {
        // notification received from firebase
        this.fcm.onNotification().subscribe(data => {
          if (data.wasTapped) {
            console.log("Received in background");
          } else {
            console.log("Received in foreground");
          };
        });

        this.fcm.onTokenRefresh().subscribe(token => {
          // Register your new token in your back-end if you want
          // backend.registerToken(token);
        });

        const crashlytics = this.firebaseCrashlytics.initialise();
        crashlytics
          .logUser({
            name: "John Doe",
            email: "john@doe.com",
            id: "123"
          })
          .then(() => alert(`user logged`))
          .catch((err: any) => alert(err.message));
        crashlytics.logException('my caught exception');
        crashlytics.crash();
        this.getToken();
      })

  }
  subscribeToTopic() {
    this.fcm.subscribeToTopic('enappd');
  }
  // Method call to create a token for firebase notification
  getToken() {
    this.fcm.getToken().then(token => {
      console.log('token', token)
      // Register your new token in your back-end if you want
      // backend.registerToken(token);
    });
  }
  unsubscribeFromTopic() {
    this.fcm.unsubscribeFromTopic('enappd');

  }


  /**
    * method call to after clicking on menu
  */
  openMenu() {
    this.userDetails = JSON.parse(localStorage.getItem('Liquidity_Outlet_User') || '{}');
    if (this.userDetails != '') {
      this.userDetails = JSON.parse(localStorage.getItem("Liquidity_Outlet_User") || '');
    }
  }




  // Method call to log out app
  logOut() {
    localStorage.clear();
    this.navCtrl.navigateRoot('/welcome')
  }
}
