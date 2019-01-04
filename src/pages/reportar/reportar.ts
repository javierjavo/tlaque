import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-reportar',
  templateUrl: 'reportar.html',
})
export class ReportarPage {

  constructor(
    public navCtrl: NavController,
    public authService: AuthService,
    public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportarPage');
  }

}
