import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { UserModel } from '../../models/user-model';
import { SignInPage } from '../signin/signin';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'page-s',
    templateUrl: 's.html'
})

export class SPage {
  userModel: UserModel;

  constructor(
      private http: HttpClient,
      public navCtrl: NavController,
      public loadingCtrl: LoadingController,
      public alertCtrl: AlertController) {
      this.userModel = new UserModel();
  }

  async signUp() {
      let loading = this.loadingCtrl.create({
          content: 'Creando cuenta. Por favor, espere...'
      });
      loading.present();
      try{
        this.http.get('http://tlaquebache.com.mx/q.php?key=login&user='+this.userModel.email+'&pass='+this.userModel.password).subscribe((response) => {
            console.log(response);
            this.navCtrl.push(SignInPage);
            loading.dismiss();
        });
      }catch(e) {
        loading.dismiss();
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
