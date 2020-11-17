import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    const headers = {
      'Authorization': `${this.getCookie("token")}`,
      'Content-Type': 'application/json'
    };
    
    let responseBody: any;

    this.httpClient.get<any>(`${this.SERVER_URL}/${this.getCookie("userid")}/boards/list`, { headers }).subscribe({
      next: data => {
        responseBody = data;
      },
      error: error => {
        console.error("Error durning board list request", error);
      }
    });

    return responseBody;
  }

  public createBoard(boardName: string, isBoardPublic: boolean) {
    const headers = {
      'Authorization': `${this.getCookie("token")}`,
      'Content-Type': 'application/json'
    };

    let body = {
      name: boardName,
      is_public: isBoardPublic
    };

    this.httpClient.put<any>(`${this.SERVER_URL}/${this.getCookie("userid")}/boards/create`, body, { headers }).subscribe({
      next: data => {
        console.log(`Board ${boardName} created.`, data);
      },
      error: error => {
        console.error("Error durning creating of board", error);
      }
    });
  }

  private getCookie(name: string) {
    return document.cookie.match("(?<=" + name + "=).[^;]+");
  }
}