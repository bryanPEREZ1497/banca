import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CuentaService {
  private url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  devolverCuentas(): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/cuentas')
      .pipe(
        tap(_ => this.log('Cuentas recibidas')),
        catchError(this.handleError<any[]>('devolverCuentas', []))
      );
  }

  private log(mensaje: string): void {
    console.log(mensaje);
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
