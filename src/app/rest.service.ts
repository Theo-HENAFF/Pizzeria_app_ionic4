import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }

  getPDJ(): Observable<any> {

    const apiUrl = 'http://localhost:3000/pizza/getpdj';

    return this.http.get(apiUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));

  }
  getAll(): Observable<any> {

    const apiUrl = 'http://localhost:3000/pizza/shows';

    return this.http.get(apiUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));

  }
  insertCommande(persNom: string, persPrenom: string, persTel: number, pizzaName: string, pizzaQte: number): Observable<any> {
    const apiUrl = 'http://localhost:3000/commande/insertone';
    return this.http.post(apiUrl, {nom : persNom, prenom: persPrenom, numtel: persTel, title: pizzaName, qte: pizzaQte}, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  deleteOnePizzaByTitle(pName: string): Observable<any> {
    const apiUrl = 'http://localhost:3000/pizza/deleteone';
    return this.http.post(apiUrl, {title: pName}, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  getAllCommandes(): Observable<any> {

    const apiUrl = 'http://localhost:3000/commande/shows';

    return this.http.get(apiUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));

  }
  deleteOneCommandeById(ide: string): Observable<any> {

    const apiUrl = 'http://localhost:3000/commande/deleteone';
    return this.http.post(apiUrl, {id : ide}, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
    }
    insertPizza(nom: string, Price: number, persPDJ: boolean, Url: string, desc: string): Observable<any> {
      const apiUrl = 'http://localhost:3000/pizza/insertone';
      return this.http.post(apiUrl, {title : nom, price: Price, plat_du_jour : persPDJ, url: Url, description: desc}, httpOptions).pipe(
        map(this.extractData),
        catchError(this.handleError));
    }
}
