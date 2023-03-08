import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { login } from '../interface/login';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceTsService {

  
  find(id: NamedCurve) {
    throw new Error('Method not implemented.');
  }
  private apiUrl="http://127.0.0.1:8000/api/person"
  httpOptions={
    headers:new HttpHeaders({
      'Content-type':'aplication/json'
    })
  }
  constructor(private httpClient:HttpClient) { }

   getAll():Observable<login[]>{
    return this.httpClient.get<login[]>(this.apiUrl).pipe(
    catchError(this.errorHandler)
   )}

   create(login:login):Observable<login>{
        return this.httpClient.post<login>(this.apiUrl,JSON.stringify(login),this.httpOptions).pipe(
          catchError(this.errorHandler)
        )
   }
   update(id:login,login:login):Observable<login>{
       return this.httpClient.post<login>(this.apiUrl,JSON.stringify(login),this.httpOptions).pipe(
        catchError(this.errorHandler)
      )
   }
   
   errorHandler(error:any){
     let errorMessage=''
     if(error.error instanceof ErrorEvent){
      errorMessage=error.error.message
     }else{
      errorMessage='Error code: ${error.status}\nMenssage: ${error.messsage}'
     }
     return throwError(errorMessage)
   }

  
}
