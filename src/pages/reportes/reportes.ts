import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-reportes',
  templateUrl: 'reportes.html',
})
export class ReportesPage {
  userType;
  reportes;
  constructor(
    public navCtrl: NavController,
    public authService: AuthService,
    public storage: Storage,
    private http: HttpClient) {
      storage.get('iduser').then(x => {
        this.userType =  x.TYPE;
        if(x.TYPE == 1)
          this.http.get('http://tlaquebache.com.mx/q.php?key=getReport&userID='+x.USER_ID).subscribe((response) => {
            this.reportes = response;
          });
        else
        this.http.get('http://tlaquebache.com.mx/q.php?key=getWorkerReport&userID='+x.USER_ID).subscribe((response) => {
            this.reportes = response;
          });
      });
  }

  ionViewDidLoad() {
    try{
      
    } catch (e){
        console.log(e);
    }
  }

}
