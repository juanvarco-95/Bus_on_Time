import { Component, OnInit } from '@angular/core';
import { Bus } from '../Shared/bus';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  buses: Bus[] = [
    {
      id: '0',
      name: 'Ruta 1',
      image: '/assets/bus.jpg',
      disponiblily: true,
      rute: 'Probando'
    },
  ]



  constructor() { }

  ngOnInit(): void {
  }

}


