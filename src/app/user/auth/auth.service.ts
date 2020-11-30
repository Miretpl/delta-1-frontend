import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private TOKEN: string = "token";
  constructor(public jwtHelper: JwtHelperService) {}

  public isAuthenticated(): boolean {
    const token = this.getCookie(this.TOKEN);
    return this.authenticate(token);
  }

  public authenticate(token: string): boolean {
    if (token != null && token.length != 0) {
      return true;
    }

    return false;
  }

  private getCookie(name: string) {
    var token = document.cookie.match(`(?<=${name}=).[^;]{0,}`);

    if (token != null && token[0].length > 0) {
      return token[0];
    }

    return "";
  }
}