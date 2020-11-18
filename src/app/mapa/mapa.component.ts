import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  title = 'mapa';
  
  pos = {
    lat : -34.681,
    lng : -58.371
  };

  label = {
    color: 'black',
    text: 'Mark'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
