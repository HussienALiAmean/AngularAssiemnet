import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../servise/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor(private _CommentsService:CommentsService){}
  
  commments:any;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._CommentsService.getuseres(1).subscribe({
      next:(data)=>{ this.commments=data;},
      error:(err)=>{console.log(err);}
    })
  }
}
