import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { UserModel } from '../../models/user-model';
import { SPage } from '../s/s';
import { HomePage } from '../home/home';
import { DashboardPage } from '../dashboard/dashboard';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
    selector: 'page-signin',
    templateUrl: 'signin.html'
})

export class SignInPage {
  userModel: UserModel;

    constructor(
      private afAuth: AngularFireAuth,
      public navCtrl: NavController,
      public loadingCtrl: LoadingController,
      public alertCtrl: AlertController,
      public authService: AuthService) {
      this.userModel = new UserModel();
    }

    async signIn() {
      let loading = this.loadingCtrl.create({
            content: 'Iniciando sesión. Por favor, espere...'
        });
        loading.present();
        try{
          const RESULT= await this.afAuth.auth.signInWithEmailAndPassword(this.userModel.email, this.userModel.password).then(result => {
            loading.dismiss();
            this.navCtrl.setRoot(HomePage);
        }).catch(error => {
            loading.dismiss();
            console.log(error);
            this.alert('Error','Ha ocurrido un error inesperado. Por favor intente nuevamente.');
        });
      } catch (e){
        console.log(e);
      }
    }

    signUp() {
        this.navCtrl.push(SPage);
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
