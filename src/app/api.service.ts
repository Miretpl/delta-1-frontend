import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private SERVER_URL = environment.serverUrl;

  constructor(private httpClient: HttpClient) { }

  public getTestData() {
    return this.httpClient.get(this.SERVER_URL);
  }
}
