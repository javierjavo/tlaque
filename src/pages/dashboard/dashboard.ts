import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { SignInPage } from '../signin/signin';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';



@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})

export class DashboardPage {

  constructor(
    public navCtrl: NavController,
    public authService: AuthService) {
  }

  signOut() {
    this.authService.signOut();
    this.navCtrl.setRoot(SignInPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialPage');
  }
  @ViewChild(Slides) slides: Slides;

/*  goToSlide() {
    this.slides.slideNext();
    this.slides.isEnd();
    this.slides.length();
  }
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }
  */
  goToNext(){
    if(!this.slides.isEnd()){
      this.slides.lockSwipeToNext(false);
      this.slides.lockSwipeToPrev(false);
      this.slides.slideNext(800);
      this.slides.lockSwipeToNext(false);
      this.slides.lockSwipeToPrev(true);
      this.slides.update();
      console.log("work")
    } else {

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
