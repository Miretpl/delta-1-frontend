import { Injectable, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../user/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  @Output() loggingStatus: EventEmitter<any> = new EventEmitter();
  isLogged: boolean;

  constructor(private authService: AuthService) {
    if (this.authService.isAuthenticated()) {
      this.changeLoggingStatus();
    }
  }

  getLoggingStatus(): any {
    return this.loggingStatus;
  }

  changeLoggingStatus(): void {
    this.isLogged = !this.isLogged;
  }

  emitLoggingStatus(): void {
    this.loggingStatus.emit(this.isLogged);
  }

  removeToken(): void {
    document.cookie = "token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
  }
}