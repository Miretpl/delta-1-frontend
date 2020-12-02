import { Injectable, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../user/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  @Output() loggingStatus: EventEmitter<any> = new EventEmitter();
  isLogged: boolean;

  private TOKEN: string = "token";

  constructor(private authService: AuthService) {
    if (this.authService.isAuthenticated()) {
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