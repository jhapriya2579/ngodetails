import { Comments } from './../classes/comments';
import { HttpService } from './../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _httpservice: HttpService ) { }
   lstcomments: Comments[];
  ngOnInit() {
    this._httpservice.getcomments()
    .subscribe(
      data=>{
       this.lstcomments = data //data is the json in form of list which we are type casting to list of comments
      }
    )
  }

}
