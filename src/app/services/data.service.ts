import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
   private readonly URL = 'https://raw.githubusercontent.com/jhapriya2579/ngodetails/master/cards.json';
   constructor(private httpclient: HttpClient) { }
   // create a method named: getcomments()
   // this method returns list-of-items in form of Observable
   // every HTTTP call returns Observable object
   getcomments(): Observable<any> {
      // this.http is a HttpClient library provide by @angular/common
    // we are calling .get() method over this.http object
    // this .get() method takes URL to call API
      return this.httpclient.get(this.URL);
   }
}