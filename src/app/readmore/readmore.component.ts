import { Comment } from './../classes/comments';
import { DataService } from '../services/data.service';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-readmore',
  templateUrl: './readmore.component.html',
  styleUrls: ['./readmore.component.css']
})
export class ReadmoreComponent implements OnInit  {
  readMoreComment: Comment;
  constructor(private dataservice: DataService, private route: ActivatedRoute){}
  //using activated route we get access to route parameters we need to injected in activated route class in our constructor
  ngOnInit(){
    this.route.paramMap.subscribe(
      //paramMap gives all the parameters in the route
      //type of property of paramMap is observable which we can subscribe and get values emitted in the observable
      params =>{
        //from UI on the click of readmore button the we get response in form of string which we convert to number 
        var id = Number(params.get("id"));
        this.dataservice.getcomments().subscribe(data =>{
          for (var comment of data){
            if (comment.id === id){
              this.readMoreComment= comment;
            }
        }
        })
      }
    )
  }
}