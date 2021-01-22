import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BusONtime';

  isValid: boolean = true;
	check(valid: boolean){
		this.isValid = valid;
	}
 
}
