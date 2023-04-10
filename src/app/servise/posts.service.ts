import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from '../Shared Classes and types/IPost';
import { Observable, catchError, throwError } from 'rxjs';
import { Iuser } from '../Shared Classes and types/Iuser';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { }
   
  getuseres():Observable<IPost[]>
  
  {
    return this.httpClient.get<IPost[]>("https://jsonplaceholder.typicode.com/posts").pipe(catchError((err: any) => {
     return throwError(() => err.message || "server error");
    }));;

  }
  

}
