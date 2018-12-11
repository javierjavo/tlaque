import { Component, ViewChild } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Nav } from 'ionic-angular';
import { Storage } from '@ionic/storage';



import { AuthService } from '../providers/auth-service';

import { SignInPage } from '../pages/signin/signin';
import { SPage } from '../pages/s/s';
import { HomePage } from '../pages/home/home';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ReportPage } from '../pages/report/report';
import { TutorialPage } from '../pages/tutorial/tutorial';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = TutorialPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public authService: AuthService,
    public storage: Storage){
    }

  openHome(){
    this.rootPage(HomePage);
  }

  openReport(){
    this.nav.push(ReportPage);
  }



}
