import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { consts } from 'src/app/config/consts';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private SERVER_URL = environment.serverUrl;

  constructor(private httpClient: HttpClient) { }

  public executeGetRequest(endpoint: string) {
    return this.getRequest(this.getUrl(endpoint), this.getAuthorizationHeader());
  }

  public executePutRequest(endpoint: string, data: any) {
    return this.putRequest(this.getUrl(endpoint), data, this.getAuthorizationHeader());
  }

  public executePostRequest(endpoint: string, data: any, auth: boolean) {
    if (auth) {
      return this.postRequest(this.getUrl(endpoint), data, this.getHeader());
    } else {
      return this.postRequest(this.getUrl(endpoint), data, this.getAuthorizationHeader());
    }
  }

  public executeDeleteRequest(endpoint: string) {
    return this.deleteRequest(this.getUrl(endpoint), this.getAuthorizationHeader());
  }

  private deleteRequest(url: string, headers: any) {
    return this.httpClient.delete(url, { headers: headers });
  }

  private getRequest(url: string, headers: any) {
    return this.httpClient.get(url, { headers: headers, observe: 'body' });
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
      .set('Authorization', `${this.getCookie(consts.TOKEN_NAME)}`);
  }

  public setCookie(name: string, value: string) {
    document.cookie = `${name}=${value};`;
  }

  public getCookie(name: string) {
    return document.cookie.match(`(?<=${name}=).[^;]{0,}`);
  }

}
