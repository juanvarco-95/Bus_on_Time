import { Component, OnInit } from '@angular/core';
import { Bus } from '../Shared/bus';

const BUSES: Bus[] = [
  {
    id: '0',
    name: 'Ruta 1',
    image: '/assets/bus.jpg',
    disponibility: true,
    rute: 'Probando'
  },

];

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  buses = BUSES;
  
  selectedBus = BUSES[0];


  constructor() { }

  ngOnInit(): void {
  }

}


