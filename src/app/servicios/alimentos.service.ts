import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { alimentos } from '../interface/alimentos';
@Injectable({
  providedIn: 'root'
})
export class AlimentosService {
  find(id: number) {
    throw new Error('Method not implemented.');
  }
  private apiUrl="http://192.168.192.57:8057/api/llaliments"
  httpOptions={
    
  }
  constructor(private httpClient:HttpClient) { }

   getAll():Observable<alimentos[]>{
    return this.httpClient.get<alimentos[]>(this.apiUrl).pipe(
    catchError(this.errorHandler)
   )}

   create(alimento:alimentos):Observable<alimentos>{
        return this.httpClient.post<alimentos>(this.apiUrl,JSON.stringify(alimento),this.httpOptions).pipe(
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
