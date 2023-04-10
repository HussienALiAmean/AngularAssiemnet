import { Component, OnInit } from '@angular/core';
import { IPost } from '../Shared Classes and types/IPost';
import { PostsService } from '../servise/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts:IPost[]=[];
  constructor(private _PostsService:PostsService){}
  
  ngOnInit(): void {
   
    this._PostsService.getuseres().subscribe({
      next: (data)=>{this.posts=data;
      
      console.log(data);
      }
      ,
      error: (error)=>{console.log(error);}
    });

  }

}
