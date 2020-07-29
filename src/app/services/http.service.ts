import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService{
 constructor(private httpclient: HttpClient){}
 getcomments(): Observable<any> {
    return this.httpclient.get("https://raw.githubusercontent.com/jhapriya2579/ngodetails/master/cards.json");
 }

}