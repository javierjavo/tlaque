import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from '../providers/auth-service';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { SignInPage } from '../pages/signin/signin';
import { SPage } from '../pages/s/s';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ReportPage } from '../pages/report/report';
import { ReportesPage } from '../pages/reportes/reportes';
import { ReportarPage } from '../pages/reportar/reportar';

import { Tutorial2Page } from '../pages/tutorial2/tutorial2';
import { TutorialPage } from '../pages/tutorial/tutorial';

import { FirebaseDataProvider } from '../providers/firebase-data/firebase-data';


export const firebaseConfig = {
    apiKey: "AIzaSyBzIRbUj9pqa-UAmsWKVtSsk5QfmFf2si8",
    authDomain: "tlaque-67444.firebaseapp.com",
    databaseURL: "https://tlaque-67444.firebaseio.com",
    projectId: "tlaque-67444",
    storageBucket: "tlaque-67444.appspot.com",
    messagingSenderId: "23618756914"
};

@NgModule({
  declarations: [
    MyApp,
    SignInPage,
    SPage,
    DashboardPage,
    ReportPage,
    ReportesPage,
    ReportarPage,
    TutorialPage,
    Tutorial2Page
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SignInPage,
    SPage,
    DashboardPage,
    ReportPage,
    ReportesPage,
    ReportarPage,
    TutorialPage,
    Tutorial2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    FirebaseDataProvider
  ]
})
export class AppModule {}
