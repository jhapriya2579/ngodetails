import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Comment } from '../classes/comments';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  constructor(private dataservice: DataService ) { }
  lstcomments: Comment[];
 ngOnInit() {
   this.dataservice.getcomments()
   .subscribe(
     data=>{
      this.lstcomments = data//data is the json in form of list which we are type casting to list of comments
      this.lstcomments.sort(this.mySort);
     }
   )
 }

 mySort(comment1 , comment2){
   return  (comment1.date > comment2.date) ? 1 : -1;
 }

 getMoreData(id):Comment{
    for (var comment of this.lstcomments){
        if (comment.id === id){
          return comment;
        }
    }
    return null;
 }
}
