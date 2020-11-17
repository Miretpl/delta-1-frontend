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
    return this.httpClient.get(url, { headers: this.getHeader(), observe: 'body' });
  }

  // public createBoard(boardName: string, isBoardPublic: boolean) {
  //   const headers = {
  //     'Authorization': `${this.getCookie("token")}`,
  //     'Content-Type': 'application/json'
  //   };

  //   let body = {
  //     name: boardName,
  //     is_public: isBoardPublic
  //   };

  //   this.httpClient.put<any>(`${this.SERVER_URL}/${this.getCookie("userid")}/boards/create`, body, { headers }).subscribe({
  //     next: data => {
  //       console.log(`Board ${boardName} created.`, data);
  //     },
  //     error: error => {
  //       console.error("Error durning creating of board", error);
  //     }
  //   });
  // }

  private getUrlWithUserId(endpoint: string) {
    return this.SERVER_URL + this.getCookie(this.USER_ID_NAME) + endpoint;
  }

  private getHeader() {
    return new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `${this.getCookie(this.TOKEN_NAME)}`)
    ;
  }

  private getCookie(name: string) {
    return document.cookie.match(`(?<=${name}=).[^;]{0,}`);
  }
}