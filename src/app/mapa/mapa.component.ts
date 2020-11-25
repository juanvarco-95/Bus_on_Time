import { LatLng, LatLngLiteral } from '@agm/core';
import { Component, OnInit } from '@angular/core';
import { angularMath } from 'angular-ts-math';






@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {
  R = 6378137;

  latBus = 4.79508;
  lngBus = -75.6885;
  labelBus = "B"

  
  latPer = 4.801274;
  lngPer = -75.759898;
  labelPer = "P"
  zoom = 15;

 
  


  ngOnInit(): void {
    this.getLocation();
    this.getDistance([10,10],[20,20]);
  }

  radio(x){
    const sol = x *angularMath.getPi();
    
    return sol;
  }

  getTime() {
    
  }

  getDistance(pos1,pos2){
    const R = 6378137;
    const Lat = this.radio(pos2[0] - pos1[0]);
    const Lng = this.radio(pos2[1] - pos1[1]);
    const a = angularMath.sinNumber(Lat/2) * angularMath.sinNumber(Lat / 2) + angularMath.cosNumber(this.radio(pos1[0])) * angularMath.cosNumber(this.radio(pos2[1])) * angularMath.sinNumber(Lng / 2) * angularMath.sinNumber(Lng / 2);
    const c = 2 * (angularMath.atanNumber(angularMath.squareOfNumber(a)));
    const d = R * c;
    console.log(d);
    return d;
  }
  
  

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        if (position) {
          console.log("Latitude: " + position.coords.latitude +
            "Longitude: " + position.coords.longitude);
          this.latPer = position.coords.latitude;
          this.lngPer = position.coords.longitude;
          console.log(this.latPer);
          console.log(this.lngPer);
        }
      },
        (error: PositionError) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  

}
