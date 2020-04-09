import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { retry, catchError } from 'rxjs/operators';
import data from './loginData.json';
import { TimeoutError } from 'rxjs';
import { IfStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})

export class AjaxService {

  constructor(
    private httpClient: HttpClient
  ) { }


  // get(config): Observable<any> {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   });

  //   let response;
  //   response = this.httpClient.get(config.url, { headers });
  //   return response;
  // }

  get(config) {
    data.login.forEach(element => {
      if(element.userid == config.data.username && element.password == config.data.password){
       localStorage.setItem('showGallery', "yes")
      }
    });
  }
}
