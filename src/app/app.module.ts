import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './services/http.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule}  from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { ReadmoreComponent } from './readmore/readmore.component';
import { AppRoutingModule } from './app-routing.module';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ReadmoreComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [
    HttpService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
