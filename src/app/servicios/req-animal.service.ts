import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'

import {Observable,throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { requerimientoa } from '../interface/req-animal';

@Injectable({
  providedIn: 'root'
})
export class RequerimientoAService {
  find(id: number) {
    throw new Error('Method not implemented.');
  }
  private apiUrl="http://192.168.192.57:8057/api/listEspecie"
  httpOptions={
    headers:new HttpHeaders({
      'Content-type':'aplication/json'
    })
  }
  constructor(private httpClient:HttpClient) { }

   getAll():Observable<requerimientoa[]>{
    return this.httpClient.get<requerimientoa[]>(this.apiUrl).pipe(
    catchError(this.errorHandler)
   )}

   create(requerimientoa:requerimientoa):Observable<requerimientoa>{
        return this.httpClient.post<requerimientoa>(this.apiUrl,JSON.stringify(requerimientoa),this.httpOptions).pipe(
          catchError(this.errorHandler)
        )
   }
   update(id:requerimientoa,requerimientoa:requerimientoa):Observable<requerimientoa>{
       return this.httpClient.post<requerimientoa>(this.apiUrl,JSON.stringify(requerimientoa),this.httpOptions).pipe(
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