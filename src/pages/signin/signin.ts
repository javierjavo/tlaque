import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { UserModel } from '../../models/user-model';
import { SPage } from '../s/s';
import { TutorialPage } from '../tutorial/tutorial';
import { DashboardPage } from '../dashboard/dashboard';
import { AngularFireAuth } from 'angularfire2/auth';
import { Storage } from '@ionic/storage';


@Component({
    selector: 'page-signin',
    templateUrl: 'signin.html'
})

export class SignInPage {
    userModel: UserModel;
    show = false;

    constructor(
      private afAuth: AngularFireAuth,
      public navCtrl: NavController,
      public loadingCtrl: LoadingController,
      public alertCtrl: AlertController,
      public authService: AuthService,
      public storage: Storage
    ) {
        this.userModel = new UserModel();
    }

    ionViewDidLoad(){
        this.show = false;
        this.storage.get('tutorial').then((tuto) => {
            if(!tuto) this.navCtrl.setRoot(TutorialPage);
        });
        this.storage.get('user').then((user) => {
            if(user){
                if( user.length > 0 ) this.navCtrl.setRoot(DashboardPage);
            }else this.show = true;
        });
    }

    async signIn() {
      let loading = this.loadingCtrl.create({
            content: 'Iniciando sesión. Por favor, espere...'
        });
        loading.present();
        try{
            await this.afAuth.auth.signInWithEmailAndPassword(this.userModel.email, this.userModel.password).then( () => {
                loading.dismiss();
                this.storage.set('user', this.userModel.email).then(()=>{
                    this.navCtrl.setRoot(DashboardPage);
                });
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
