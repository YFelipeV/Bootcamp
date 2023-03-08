import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, Observable, throwError } from 'rxjs';
import { zona } from '../interface/zona';

@Injectable({
  providedIn: 'root'
})
export class ZonasService {

  find(id: number) {
    throw new Error('Method not implemented');
  }
  private apiUrl = "http://127.0.0.1:8000/api/person"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'aplication/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<zona[]> {
    return this.httpClient.get<zona[]>(this.apiUrl).pipe(
      catchError(this.errorHandler)
    )
  }

  create(zona: zona): Observable<zona> {
    return this.httpClient.post<zona>(this.apiUrl, JSON.stringify(zona), this.httpOptions).pipe(
      catchError(this.errorHandler)
    )
  }

  update(id: zona, zona: zona): Observable<zona> {
    return this.httpClient.post<zona>(this.apiUrl, JSON.stringify(zona), this.httpOptions).pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error: any) {
    let errorMessage = ''
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message
    } else {
      errorMessage = 'Error code: ${error.status}\nMenssage: ${error.messsage}'
    }
    return throwError(errorMessage)
  }
}
