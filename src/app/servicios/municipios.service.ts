import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'

import {Observable,throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { municipio } from '../interface/municipios';

@Injectable({
  providedIn: 'root'
})
export class MunicipiosService {
  find(id: number) {
    throw new Error('Method not implemented.');
  }
  private apiUrl="http://127.0.0.1:8000/api/person"
  httpOptions={
    headers:new HttpHeaders({
      'Content-type':'aplication/json'
    })
  }
  constructor(private httpClient:HttpClient) { }

   getAll():Observable<municipio[]>{
    return this.httpClient.get<municipio[]>(this.apiUrl).pipe(
    catchError(this.errorHandler)
   )}

   create(municipio:municipio):Observable<municipio>{
        return this.httpClient.post<municipio>(this.apiUrl,JSON.stringify(municipio),this.httpOptions).pipe(
          catchError(this.errorHandler)
        )
   }
   update(id:municipio,municipio:municipio):Observable<municipio>{
       return this.httpClient.post<municipio>(this.apiUrl,JSON.stringify(municipio),this.httpOptions).pipe(
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
