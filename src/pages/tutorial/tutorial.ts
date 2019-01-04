import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignInPage } from '../signin/signin';
import { Tutorial2Page } from '../tutorial2/tutorial2';
import { Storage } from '@ionic/storage';

 @IonicPage()
 @Component({
   selector: 'page-tutorial',
   templateUrl: 'tutorial.html',
 })
 export class TutorialPage {

   constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
   }

  comenzar(){
      this.storage.set('tutorial', true).then(()=>{
        this.navCtrl.setRoot(SignInPage);
      });
  }
  startSlide(){
    this.storage.set('tutorial',true).then(()=>{
      this.navCtrl.setRoot(Tutorial2Page);
    });
  }
}
