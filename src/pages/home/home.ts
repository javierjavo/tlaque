import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { SignInPage } from '../signin/signin';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(
    public navCtrl: NavController,
    public authService: AuthService,
    public storage: Storage) {
  }

  signOut() {
    this.storage.remove('user');
    this.authService.signOut();
    this.navCtrl.setRoot(SignInPage);
  }
}
