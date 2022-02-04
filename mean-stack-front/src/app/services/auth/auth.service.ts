import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ApiService} from "../api/api.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {

  }

  /**
   * Method for try to login the user
   * @param user
   */
  login(user: any): Promise<any> {
    return new Promise(
      (res, rej) => {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        this.http
          .post(ApiService.authUrl() + 'login', user, {headers})
          .subscribe(
            (info: any) => {
              console.info(info);
              ApiService.token = info.token;
              res(info);
            },
            err => {
              console.error(err);
              rej(err.error.errorMsg);
            }
          )
      }
    );
  }

  register(user: any): Promise<any> {
    return new Promise(
      (res, rej) => {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        this.http
          .post(ApiService.authUrl() + 'register', user, {headers})
          .subscribe(
            (info: any) => {
              console.info(info);
              ApiService.token = info.token;
              res(info);
            },
            err => {
              console.error(err);
              rej(err.error.errorMsg);
            }
          )
      }
    );

  }
}
