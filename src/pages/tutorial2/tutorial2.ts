import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { SignInPage } from '../signin/signin';
import { Storage } from '@ionic/storage';



/**
 * Generated class for the TutorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tutorial2',
  templateUrl: 'tutorial2.html',
})
export class Tutorial2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {

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


  comenzar(){
    this.storage.set('tutorial', true).then(()=>{
      this.navCtrl.setRoot(SignInPage);
    });
  }

}
