import { Component, OnInit } from '@angular/core';
import { HttpService } from './../services/http.service';
import { Comments } from '../classes/comments';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _httpservice: HttpService ) { }
  lstcomments: Comments[];
 ngOnInit() {
   this._httpservice.getcomments()
   .subscribe(
     data=>{
      this.lstcomments = data //data is the json in form of list which we are type casting to list of comments
      this.lstcomments.sort(this.mySort);
     }
   )
 }

 mySort(comment1 , comment2){
   return  (comment1.date > comment2.date) ? 1 : -1;
 }

}
