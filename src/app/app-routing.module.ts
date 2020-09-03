import { AboutusComponent } from './aboutus/aboutus.component';
import { ReadmoreComponent } from './readmore/readmore.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', component:NavbarComponent},
  {path:'readmore/:id', component: ReadmoreComponent},
  {path:'aboutUs', component: AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }