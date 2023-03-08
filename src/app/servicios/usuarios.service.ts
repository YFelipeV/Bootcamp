import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { usuario } from '../interface/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  find(id: number) {
    throw new Error('Method not implemented.');
  }
  private apiUrl="http://192.168.192.57:8057/api/allusers"
  httpOptions={
    headers:new HttpHeaders({
      'Content-type':'aplication/json'
    })
  }
  constructor(private httpClient:HttpClient) { }

  getAll():Observable<usuario[]>{
    return this.httpClient.get<usuario[]>(this.apiUrl).pipe(
    catchError(this.errorHandler)
  )}

  create(usuario:usuario):Observable<usuario>{
    return this.httpClient.post<usuario>(this.apiUrl,JSON.stringify(usuario),this.httpOptions).pipe(
      catchError(this.errorHandler)
    )
  }

  update(id:usuario,usuario:usuario):Observable<usuario>{
    return this.httpClient.post<usuario>(this.apiUrl,JSON.stringify(usuario),this.httpOptions).pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error:any){
    let errorMessage=''
    if(error.error instanceof ErrorEvent){
      errorMessage=error.error.message
    }else{
      errorMessage='Error code: ${error.status}\nMenssage: ${error.message}'
    }
    return throwError(errorMessage)
  }
}
