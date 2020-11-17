import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  @Output() loggingStatus: EventEmitter<any> = new EventEmitter();
  isLogged: boolean;

  constructor() {
    if (this.getCookie("token") != null && this.getCookie("token")[0].length > 0) {
      this.changeLoggingStatus();
    }
  }

  getLoggingStatus() {
    return this.loggingStatus;
  }

  changeLoggingStatus() {
    this.isLogged = !this.isLogged;
  }

  emitLoggingStatus() {
    this.loggingStatus.emit(this.isLogged);
  }

  removeToken() {
    document.cookie = "token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
  }

  private getCookie(name: string) {
    return document.cookie.match(`(?<=${name}=).[^;]{0,}`);
  }

}
