import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { animal } from '../interface/animales';

@Injectable({
  providedIn: 'root'
})
export class AnimalesService {
  find(id_animal: number){
    throw new Error('Method not implemented.');
  }
  private apiurl = "http://192.168.192.57:8057/api/deleteEspecie";
  httpOptions={
    headers: new HttpHeaders({
    'content-type':'aplication/json'
  })
}
  constructor(private  httpClient:HttpClient) { }

getAll(): Observable<animal[]>{
    return this.httpClient.get<animal[]>(this.apiurl).pipe(
      catchError(this.errorHandler)
      )}

create(animal:animal): Observable<animal>{
  return this.httpClient.post<animal>(this.apiurl,JSON.stringify(animal),this.httpOptions).pipe(
    catchError(this.errorHandler)
  )
}

update(animal:animal): Observable<animal>{
  return this.httpClient.post<animal>(this.apiurl,JSON.stringify(animal),this.httpOptions).pipe(
    catchError(this.errorHandler)
  )
}

  errorHandler(error:any){
     let errorMessage=''
        if(error.error instanceof ErrorEvent){
          errorMessage=error.error.Message
        }else{
          errorMessage='Error code: ${error.status}\nMessage: ${error.Message}'
        }
        return throwError(errorMessage)
  }
}