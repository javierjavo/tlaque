import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { UserModel } from '../../models/user-model';
import { SPage } from '../s/s';
import { TutorialPage } from '../tutorial/tutorial';
import { DashboardPage } from '../dashboard/dashboard';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';


@Component({
    selector: 'page-signin',
    templateUrl: 'signin.html'
})

export class SignInPage {
    userModel: UserModel;
    show = false;

    constructor(
      private http: HttpClient,
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
            this.http.get('http://tlaquebache.com.mx/q.php?key=login&user='+this.userModel.email+'&pass='+this.userModel.password).subscribe((response) => {
                loading.dismiss();
                if( response[0] ){
                    this.storage.set('iduser', response[0]);
                    this.storage.set('user', this.userModel.email);
                    this.navCtrl.setRoot(DashboardPage);
                }
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
