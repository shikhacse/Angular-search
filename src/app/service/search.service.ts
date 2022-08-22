import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  detail = new BehaviorSubject<any>('');
  serachResult = new BehaviorSubject<any>('');
  listOfResult = new BehaviorSubject<any>('');
  constructor(private http : HttpClient) { }

  searchDetail(name: any) {
    this.detail.next(name);
  }

  searchDetails(result:any){
   this.serachResult.next(result);
  }

  listOfficerResult(result:any , compNumb : number , compName : string){
    let values = {result , compNumb  , compName }
  this.listOfResult.next(values)
  }

  getData(term:any): Observable<any>{
    if (term === "" ){
      return of(null);
    }else{
    let headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Credentials' : 'true',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
    })
  headers = headers.set('x-api-key', `sJT1AMVeWM6km25NmcSYH5grb13x8aAJ4YdNYYFK`)
    return this.http.get(`https://angular-exercise.trunarrative.cloud/TruProxyAPI/rest/Companies/v1/Search?Query=${term}`, {headers: headers}).pipe(
      map(response => {
        return response;
      })
    );
  }
}


getListData(term:number): Observable<any>{
  let headers = new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Credentials' : 'true',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
  })
  
headers = headers.set('x-api-key', `sJT1AMVeWM6km25NmcSYH5grb13x8aAJ4YdNYYFK`)
  return this.http.get(`https://angular-exercise.trunarrative.cloud/TruProxyAPI/rest/Companies/v1/Officers?CompanyNumber=${term}`, {headers: headers}).pipe(
    map(response => {
      return response;
    })
  );

}


public _searchEntries(term: any){
  return this.getData(term);
}

public _ListOfficer(term: number){
  return this.getListData(term);
}
}
