
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../servise/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit  {

  useres:any;
  constructor(private _UsersService:UsersService){}
  
  ngOnInit(): void {
   
    this._UsersService.getuseres().subscribe({
      next: (data)=>{//this.useres=data;
      
      console.log(data);
      }
      ,
      error: (error)=>{console.log(error);}
    });

  }

}
