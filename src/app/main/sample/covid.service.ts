import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL = 'https://corona.lmao.ninja/v2/';

@Injectable({
  providedIn: 'root'
})

export class CovidService {

  constructor(private http:HttpClient) { }

  //All
  public getAllCases(): Observable<any> {
    return this.http.get(API_URL + 'all').pipe(map(res => res));
  }

  //All Historical Countries
  public getAllHistoricalCountries(): Observable<any> {
    return this.http.get(API_URL + 'historical').pipe(map(res => res));
  }
  // All Countries
  public getAllCountries(): Observable<any> {
    return  this.http.get(API_URL + 'countries').pipe(map(res => res));
  }
}
