import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Iuser } from '../Shared Classes and types/Iuser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  
    constructor(private httpClient: HttpClient) { }
    
   


   getuseres():Observable<Iuser[]>
   
   {
     return this.httpClient.get<Iuser[]>("https://jsonplaceholder.typicode.com/users").pipe(catchError((err: any) => {
      return throwError(() => err.message || "server error");
    }));;


   }


}
