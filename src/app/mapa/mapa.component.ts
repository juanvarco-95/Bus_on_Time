import { LatLng, LatLngLiteral } from '@agm/core';
import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { angularMath } from 'angular-ts-math';
import { Bus } from '../Shared/bus';
import { paradero} from '../Shared/paradero';
import { drawMap } from '../Shared/drawMap';




let BUSES: Bus[] = [
  {
    id: '0',
    name: 'Ruta 27 Megabus',
    image: '/assets/Ruta27.jpg',
    disponibility: true,
    rute: '/assets/Mapa.jpg',
    time: 0, 
    pos: [[0,0],[0,0]],
  },
];

const PARADEROS: paradero[] = [
  {
    id: '0',
    nombre: "Paradero 1",
    pos: [4.8094985,-75.7347102],
  },
  {
    id: '1',
    nombre: "Paradero 2",
    pos: [4.8071732,-75.7318121],
  },
  {
    id: '2',
    nombre: "Paradero 3",
    pos: [4.806452,-75.704925],
  }
];

const DRAWMAP: drawMap[] = [
  
  {
    id: '1',
    lat: 4.8094985,
    lng: -75.7347102,
  },
  {
    id: '2',
    lat: 4.8095707,
    lng: -75.7336736,
  },
  {
    id: '3',
    lat: 4.8089787,
    lng: -75.733062,
  },
  {
    id: '4',
    lat: 4.8081408,
    lng: -75.7328917,
  },
  {
    id: '5',
    lat: 4.8071732,
    lng: -75.7318121,
  },
  {
    id: '6',
    lat: 4.805671,
    lng: -75.716591,
  },
  {
    id: '7',
    lat: 4.807903,
    lng: -75.710638,
  },
  {
    id: '8',
    lat: 4.808144,
    lng: -75.708140,
  },
  {
    id: '9',
    lat: 4.806452,
    lng: -75.704925,
  },

  
];

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {


  buses = BUSES;
  paraderos = PARADEROS;
  map = DRAWMAP;

  speed = 40;
  show = true;
  zoom = 15;

  
  //Direcciones

  latPer = 4.801274;
  lngPer = -75.759898;
  labelPer = "P";

  latBus = 4.79508;
  lngBus = -75.6885;
  labelBus = "B";
   
  latPrueba1 = 4.8044173;
  lngPrueba1 = -75.7387846;
  labelPrueba1 = "P1";   

  latPrueba2 = 4.8094985;
  lngPrueba2 = -75.7347102;
  labelPrueba2 = "P1";

  latPrueba3 = 4.8095707;
  lngPrueba3 = -75.7336736;
  labelPrueba3 = "P3";

  

  latPrueba4 =  4.8089787;
  lngPrueba4 = -75.733062;
  labelPrueba4 = "P4";

  

  latPrueba5 = 4.8081408;
  lngPrueba5 = -75.7328917 ;
  labelPrueba5 = "P5";

   

  latPrueba6 = 4.8071732;
  lngPrueba6 = -75.7318121;
  labelPrueba6 = "P2";

  

  latPrueba7 = 4.8073804;
  lngPrueba7 = -75.7250838 ;
  labelPrueba7 = "P7";

  latPrueba8 = 4.7934136;
  lngPrueba8 = -75.6908467;
  labelPrueba8 = "P8";
  
public lat: Number = 0
public lng: Number = 0

//


//Funciones

  busLocationlat():Number {
			navigator.geolocation.getCurrentPosition((pos)=>{
				this.lat = pos.coords.latitude;
      });
      console.log("LatBus:" +this.lat);
      let Blat = this.lat;
      
      return Blat;
   }

   busLocationlng():Number {
    navigator.geolocation.getCurrentPosition((pos)=>{
      this.lng = pos.coords.longitude;
    });
   
    console.log("LngBus:" + this.lng);
    let Blng = this.lng;
    
    return Blng;
 }
    
  getPos(lat,lng):Array<number>{
    let v : Array<number>
    v= new Array<number>()
    v.push(lat);
    v.push(lng);
    return v;

  }

  
  
  


  ngOnInit(): void {
    //this.getTime([4.8095707,-75.7336736],[4.8089787,-75.733062])
   // this.getTimeMinute(35.121651235);
 
    
  }

  radio(x){
    let sol = x * (Math.PI/180);
    return sol;
  }

   getTime(dis1,dis2) {
    let distance = this.getDistance([dis1[0],dis1[1]],[dis2[0],dis2[1]]);
    let time = distance/this.speed;
    console.log(time);
    let v7 = this.getTimeMinute(time);  
    console.log(v7[0]); 
    
    return ("h: " + v7[0]  +  " m: " + v7[1].toFixed(0) + " s: " + v7[2]);
  }
/*
  getDistance(pos1,pos2){
    var r = 6378137;
    var dlat = this.radio(pos2[0]-pos1[0]);
    var dlon = this.radio(pos2[1]-pos1[1]);
    var a = Math.sin(dlat/2) * Math.sin(dlat/2) + Math.cos(this.radio(pos1[0])) * Math.cos(this.radio(pos2[1])) * Math.sin(dlon/2) * Math.sin(dlon/2);
    var c = 2 * Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
    var d = r * c;
    return d;
    
  }
  */
  getDistance(pos1,pos2){
    let R = 6371;
    let Lat = this.radio(pos2[0] - pos1[0]);
    let Lng = this.radio(pos2[1] - pos1[1]);
    let a = angularMath.sinNumber(Lat/2) * angularMath.sinNumber(Lat/2) + angularMath.cosNumber(this.radio(pos1[0])) * angularMath.cosNumber(this.radio(pos2[0])) * angularMath.sinNumber(Lng / 2) * angularMath.sinNumber(Lng / 2);
    let c1 = angularMath.atanNumber(angularMath.squareOfNumber(a));
    let c2 = angularMath.atanNumber(angularMath.squareOfNumber(1-a));
    let c3 = angularMath.div(c1,c2);
    let c = 2 * angularMath.atanNumber(c3);
    let d = R * c;
    //console.log("Distance = " + d);
    return d;
  }

  getTimeMinute(num):Array<number>{
    let hora = parseInt((num).toFixed(0));
    let minuto = ((num%1)*60);
    let segundo = parseInt(((minuto%1)*60).toFixed(0));
   // console.log("h: " + hora  +  " m: " + minuto.toFixed(0) + " s: " + segundo); 
    let v : Array<number>
    v= new Array<number>()
    v.push(hora);
    v.push(minuto);
    v.push(segundo);
    return v;
  }

  getTime2points(a,b):number {
    let c = b - a;
    return c;
  }

  //-------------------------------------------------------------------------------------
  




   
}

  


