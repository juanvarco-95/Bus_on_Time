import { LatLng, LatLngLiteral } from '@agm/core';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  latBus = 4.81321;
  lngBus = -75.6946;
  labelBus = "B"

  
  latPer ;
  lngPer ;
  labelPer = "P"
  zoom = 15;

 
  paths: LatLngLiteral[] = [
    { lat: 4.81321, lng: -75.6946 },
    
  ]


  ngOnInit(): void {
    this.getLocation();
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
