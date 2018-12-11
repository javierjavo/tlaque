import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { UserModel } from '../../models/user-model';
import { SignInPage } from '../signin/signin';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
    selector: 'page-s',
    templateUrl: 's.html'

})

export class SPage {
  userModel: UserModel;

  constructor(
      private afAuth: AngularFireAuth,
      public navCtrl: NavController,
      public loadingCtrl: LoadingController,
      public alertCtrl: AlertController,
      public authService: AuthService) {
      this.userModel = new UserModel();
  }

  async signUp() {
      let loading = this.loadingCtrl.create({
          content: 'Creando cuenta. Por favor, espere...'
      });
      loading.present();
      try{
        const RESULT= await this.afAuth.auth.createUserWithEmailAndPassword(this.userModel.email, this.userModel.password).then(result => {
            console.log(RESULT);
            loading.dismiss();
            this.navCtrl.push(SignInPage);
        }).catch(error => {
            loading.dismiss();
            console.log(error);
            this.alert('Error', 'Ha ocurrido un error inesperado. Por favor intente nuevamente.');
        });
      }catch(e) {
        console.log(e);
      }
  }

  alert(title: string, message: string) {
      let alert = this.alertCtrl.create({
          title: title,
          subTitle: message,
          buttons: ['OK']
      });
      alert.present();
  }

}
