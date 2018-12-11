import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
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

   ionViewDidLoad() {
     console.log('ionViewDidLoad TutorialPage');
   }


   comenzar(){
     this.storage.set('tutorial', true).then(()=>{
        console.log("no mas tuto");
        this.navCtrl.setRoot(DashboardPage);
      });
   }
   startSlide(){
   this.storage.set('tutorial',true).then(()=>{
     console.log("u better work bitch");
     this.navCtrl.setRoot(Tutorial2Page);
     });
 }
 }
