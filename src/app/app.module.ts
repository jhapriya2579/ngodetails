import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService } from './services/data.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule}  from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { ReadmoreComponent } from './readmore/readmore.component';
import { AppRoutingModule } from './app-routing.module';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { AboutusComponent } from './aboutus/aboutus.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ReadmoreComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [
    DataService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
