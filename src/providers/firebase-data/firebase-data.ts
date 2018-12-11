import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

/*
  Generated class for the FirebaseDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseDataProvider {
  public user = firebase.auth().currentUser;
  public email = this.user.email;

  constructor(public http: HttpClient) {
    console.log('Hello FirebaseDataProvider Provider');
  }

    reportar(calleP, calleCruce1, calleCruce2, tipoCalle, email) {
      return firebase.database().ref('reporte')
      .push({ calleP, calleCruce1, calleCruce2, tipoCalle, email});
  }

}
