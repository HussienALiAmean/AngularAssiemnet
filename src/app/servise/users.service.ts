import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  
    constructor(private httpClient: HttpClient) { }
    
   


   getuseres():Observable<any>
   
   {
     return this.httpClient.get("https://jsonplaceholder.typicode.com/users").pipe(catchError((err: any) => {
      return throwError(() => err.message || "server error");
    }));;


   }


}
