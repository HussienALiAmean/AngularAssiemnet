import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  
  constructor(private httpClient: HttpClient) { }
   
  getuseres(id:number):Observable<any>
  
  {
    return this.httpClient.get<any>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).pipe(catchError((err: any) => {
     return throwError(() => err.message || "server error");
    }));;

  }
  
}
