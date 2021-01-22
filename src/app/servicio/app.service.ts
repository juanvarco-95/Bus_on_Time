import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
 

@Injectable({
  providedIn: 'root'
})
export class AppService {

  appsRef: AngularFireList<any>;
  constructor(private db: AngularFireDatabase) { }

  listarDato() {
    this.appsRef = this.db.list('Buses');
    return this.appsRef;
  }
}
