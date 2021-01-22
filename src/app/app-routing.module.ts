import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListFirebaseComponent } from './list-firebase/list-firebase.component';

const routes: Routes = [
  { path: 'listar-dato', component: ListFirebaseComponent,}
]



@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{useHash: true}),
  ]
  
})
export class AppRoutingModule { }
