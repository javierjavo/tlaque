import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { SignInPage } from '../signin/signin';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ReportesPage } from '../reportes/reportes';
import { ReportarPage } from '../reportar/reportar';


@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})

export class DashboardPage {

  constructor(
    public navCtrl: NavController,
    public authService: AuthService,
    public storage: Storage) {
  }

  openList(){
    this.navCtrl.push(ReportesPage);    
  }

  CreateReport(){
    this.navCtrl.push(ReportarPage);    
  }

  signOut() {
    this.authService.signOut();
    this.storage.remove('user');
    this.navCtrl.setRoot(SignInPage);
  }
  
  @ViewChild(Slides) slides: Slides;

  goToNext(){
    if(!this.slides.isEnd()){
      this.slides.lockSwipeToNext(false);
      this.slides.lockSwipeToPrev(false);
      this.slides.slideNext(800);
      this.slides.lockSwipeToNext(false);
      this.slides.lockSwipeToPrev(true);
      this.slides.update();
    }
  }

  goToPrev(){
    if(!this.slides.isBeginning()){
      this.slides.lockSwipeToNext(false);
      this.slides.lockSwipeToPrev(false);
      this.slides.slidePrev(800);
      this.slides.lockSwipeToNext(true);
      this.slides.lockSwipeToPrev(false);
      this.slides.update();
    }
  }

}
