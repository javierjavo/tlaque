import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Nav } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AuthService } from '../providers/auth-service';
import { SignInPage } from '../pages/signin/signin';
import { ReportPage } from '../pages/report/report';
import { HomePage } from '../pages/home/home';
import { ReportesPage } from '../pages/reportes/reportes';
import { ContactPage } from '../pages/contact/contact';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = SignInPage;
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
  ContactUs(){
    this.nav.push(ContactPage);
  }

  openReport(){
    this.nav.push(ReportPage);
  }

  openList(){
    this.nav.push(ReportesPage);
  }

}
