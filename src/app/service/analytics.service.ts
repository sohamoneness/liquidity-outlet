import { Injectable } from '@angular/core';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private firebaseAnalytics: FirebaseAnalytics) { }

  setUser(userId: any) {
    // Use Firebase Auth uid
    this.firebaseAnalytics.setUserId(userId);
  }

  setProperty() {
    this.firebaseAnalytics.setUserProperty("framework", "angular");
  }

  logEvent(mobile: number, password: any) {
    this.firebaseAnalytics.logEvent('login', { mobile: mobile, password: password })
      .then((res: any) => console.log('response firebase', res))
      .catch((error: any) => console.error(error))
  }

  setScreenName(screenName: any) {
    this.firebaseAnalytics.setCurrentScreen(screenName);
  }
}
