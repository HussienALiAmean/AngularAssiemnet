
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../servise/users.service';
import { Iuser } from '../Shared Classes and types/Iuser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit  {

  useres:Iuser[]=[];
  constructor(private _UsersService:UsersService){}
  
  ngOnInit(): void {
   
    this._UsersService.getuseres().subscribe({
      next: (data)=>{this.useres=data;
      
      console.log(data);
      }
      ,
      error: (error)=>{console.log(error);}
    });

  }

}
