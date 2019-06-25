import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { SignInPage } from '../signin/signin';

@Component({
  selector: 'page-reportar',
  templateUrl: 'reportar.html',
})
export class ReportarPage {
  data = {
    USERID:'',
    CALLE:'',
    CRUCE1:'',
    CRUCE2:'',
    COLONIA:'',
    TIPO_SUELO:'',
    VIALIDAD:''
  }

  constructor(
    private http: HttpClient,
    public navCtrl: NavController,
    public storage: Storage) {
      storage.get('iduser').then(x => {
        this.data.USERID = x.USER_ID;
      });
  }

  ionViewDidLoad(){
  }
  sendReport(){
    this.http.get('http://tlaquebache.com.mx/q.php?key=addReport&USERID='+this.data.USERID+'&CALLE='+this.data.CALLE+'&CRUCE1='+this.data.CRUCE1+'&CRUCE2='+this.data.CRUCE2+'&COLONIA='+this.data.COLONIA+'&TIPO_SUELO='+this.data.TIPO_SUELO+'&VIALIDAD='+this.data.VIALIDAD).subscribe((response) => {});
    this.navCtrl.push(SignInPage);
  }

}
