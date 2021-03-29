import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PagoService {
  private url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  devolverPagos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/pagos`)
      .pipe(
        tap(_ => this.log('Transferencia exitosa')),
        catchError(this.handleError<any[]>('hacerTransferencia', []))
      );

  }
  hacerPago(camposDePago: any): Observable<any> {
    return this.http.post(`${this.url}/hacer-pago`, camposDePago)
      .pipe(
        tap(_ => this.log('Pago exitoso')),
        catchError(this.handleError<any[]>('hacerPago', []))
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
