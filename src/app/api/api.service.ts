import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private SERVER_URL = environment.serverUrl;

  constructor(private httpClient: HttpClient) { }

  public getTestData() {
    return this.httpClient.get(this.SERVER_URL);
  }

  public getBoardList() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')  
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrb3dhbHNraSIsImF1dGhvcml0aWVzIjpbXSwiaWF0IjoxNjA1NTI1ODYxLCJleHAiOjE2MDYzNDUyMDB9._7yjmyFTzLjwCU8exatqUlNLm13a1xs6CzzRaKju06J5MXzPrkojPID4UsW8yyhSCKXbkEjo40P7MnWpWgSrAA')
    ;
    // 'Authorization': `${this.getCookie("token")}`,
    
    let responseBody: any;
    // var url = `${this.SERVER_URL}${this.getCookie("userid")}/board/list`;
    var url = `${this.SERVER_URL}2/board/list`;

    this.httpClient.get(url, { 'headers': headers }).subscribe({
      next: data => {
        responseBody = data;
      },
      error: error => {
        console.error("Error durning board list request", error);
      }
    });

    console.log(responseBody);
    return responseBody;
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

  private getCookie(name: string) {
    return document.cookie.match("(?<=" + name + "=).[^;]+");
  }
}