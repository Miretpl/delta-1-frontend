import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private TOKEN: string = "token";
  constructor(public jwtHelper: JwtHelperService) {}

  public isAuthenticated(): boolean {
    try {
      const token = localStorage.getItem(this.TOKEN);
      return !this.jwtHelper.isTokenExpired(token);
    } catch (error) {
      return false;
    }
  }
}