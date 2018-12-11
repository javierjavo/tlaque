import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { UserModel } from '../../models/user-model';
import { SignInPage } from '../signin/signin';
import { HomePage } from '../home/home';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormBuilder, Validators, Form, FormControl, FormGroup } from '@angular/forms';
import { FirebaseDataProvider } from '../../providers/firebase-data/firebase-data';
//import {GoogleMaps,GoogleMap, GoogleMapsEvent, GoogleMapOptions,CameraPosition,MarkerOptions, Marker} from '@ionic-native/google-maps';
@Component({
    selector: 'page-report',
    templateUrl: 'report.html'

})

export class ReportPage {
//  map: GoogleMap;
  public reporte;

  constructor(public navCtrl: NavController, public firebaseData: FirebaseDataProvider,
  private formBuilder: FormBuilder) {
    this.reporte = this.formBuilder.group({
      calleP: ['', Validators.compose([Validators.required,
              Validators.min(1)])],
      calleCruce1: ['', Validators.compose([Validators.required,
              Validators.min(1)])],
      calleCruce2: ['', Validators.compose([Validators.required,
              Validators.min(1)])],
      tipoCalle: ['', Validators.compose([Validators.required,
              Validators.min(1)])]
    });
  }

  reportar(){
  if (!this.reporte.valid){
    console.log("Nice try!");
  } else {
    this.firebaseData.reportar(this.reporte.value.calleP, this.reporte.value.calleCruce1, this.reporte.value.calleCruce2,
    this.reporte.value.tipoCalle, this.firebaseData.email);
    this.reporte.reset();
    this.navCtrl.setRoot(HomePage);
  }
}
}
