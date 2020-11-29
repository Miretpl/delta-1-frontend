import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private SERVER_URL = environment.serverUrl;
  private TOKEN_NAME = "token";

  constructor(private httpClient: HttpClient) { }

  public getBoardList(endpoint: string) {
    let url = this.getUrl(endpoint);
    return this.httpClient.get(url, { headers: this.getAuthorizationHeader(), observe: 'body' });
  }

  public editBoardElement(data: any, endpoint: string) {
    return this.postRequest(this.SERVER_URL + endpoint, data, this.getAuthorizationHeader());
  }

  public createBoard(data: any, endpoint: string) {
    return this.putRequest(this.getUrl(endpoint), data, this.getAuthorizationHeader());
  }

  public send(endpoint: string, data: any) {
    return this.postRequest(this.SERVER_URL + endpoint, data, this.getHeader());
  }

  private putRequest(url: string, data: any, headers: any) {
    return this.httpClient.put(url, data, { headers: headers});
  }

  private postRequest(url: string, data: any, headers: any) {
    return this.httpClient.post(url, data, { headers: headers, observe: 'body'});
  }

  private getUrl(endpoint: string) {
    return `${this.SERVER_URL}${endpoint}`;
  }

  private getHeader() {
    return new HttpHeaders().set('Content-Type', 'application/json');
  }

  private getAuthorizationHeader() {
    return new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `${this.getCookie(this.TOKEN_NAME)}`);
  }

  private getCookie(name: string) {
    return document.cookie.match(`(?<=${name}=).[^;]{0,}`);
  }
}

