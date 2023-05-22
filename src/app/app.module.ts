import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HelperService } from './service/helper.service'
import { ApiService } from './service/api.service';

import { FCM } from "cordova-plugin-fcm-with-dependecy-updated/ionic/ngx";
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';
import { FirebaseCrashlytics } from '@ionic-native/firebase-crashlytics/ngx';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ApiService, HelperService, FCM, FirebaseAnalytics, FirebaseCrashlytics],
  bootstrap: [AppComponent],
})
export class AppModule { }
