import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private SERVER_URL = environment.serverUrl;
  private USER_ID_NAME = "user_id";
  private TOKEN_NAME = "token";

  constructor(private httpClient: HttpClient) { }

  public getBoardList(endpoint: string) {
    let url = this.getUrlWithUserId(endpoint);
    return this.httpClient.get(url, { headers: this.getAuthorizationHeader(), observe: 'body' });
  }

  public editBoardElement(data: any, endpoint: string) {
    return this.putRequest(this.SERVER_URL + endpoint, data, this.getAuthorizationHeader());
  }

  public createBoard(data: any, endpoint: string) {
    return this.putRequest(this.getUrlWithUserId(endpoint), data, this.getAuthorizationHeader());
  }

  public send(endpoint: string, data: any) {
    return this.httpClient.post(this.SERVER_URL + endpoint, data, {observe: 'body'});
  }

  private putRequest(url: string, data: any, headers: any) {
    return this.httpClient.put(url, data, { headers: headers});
  }

  private getUrlWithUserId(endpoint: string) {
    return `${this.SERVER_URL}${this.getCookie(this.USER_ID_NAME)}${endpoint}`;
  }

  private getAuthorizationHeader() {
    return new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `${this.getCookie(this.TOKEN_NAME)}`)
    ;
  }

  private getCookie(name: string) {
    return document.cookie.match(`(?<=${name}=).[^;]{0,}`);
  }
}

