import { Component, OnInit } from '@angular/core';
import { AppService } from '../servicio/app.service';
import { App } from '../servicio/app';
import { Bus } from '../Shared/bus';
import { paradero} from '../Shared/paradero';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-list-firebase',
  templateUrl: './list-firebase.component.html',
  styleUrls: ['./list-firebase.component.scss']
})
export class ListFirebaseComponent implements OnInit {

  Dato: Bus[];

  ocultarDatos: boolean = false;


  constructor(
    public leerApp: AppService
  )
  
  { }

  dateState(){
    this.leerApp.listarDato().valueChanges().subscribe(data => {
      this.ocultarDatos = true;
    })
    
  }
  ngOnInit() {
    this.dateState();
  

  let s = this.leerApp.listarDato();

  s.snapshotChanges().subscribe(data =>{
    this.Dato = [];
    data.forEach(item => {
      let a = item.payload.toJSON();
      a['$key'] = item.key;
      this.Dato.push(a as Bus);
    })
  }) 
  }
 

}
