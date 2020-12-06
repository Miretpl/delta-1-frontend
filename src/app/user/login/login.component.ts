import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { ApiService } from 'src/app/api/api.service';
import { AuthService } from 'src/app/user/auth/auth.service';
import { UserService } from 'src/app/user/service/user.service';
import { consts } from 'src/app/config/consts';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isShow: boolean = false;
  username: string;
  password: string;

  constructor(private apiService: ApiService, private router: Router, private userService: UserService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.handleLogging(this.getAuthenticationJSON());
  }

  private handleLogging(data: any): void {
    this.apiService.send(consts.LOGIN_ENDPOINT, data).subscribe(
      resp => this.handleLoginMessage(resp),
      error => this.handleLoginErrorMessage(error)
    );
  }

  private handleLoginErrorMessage(error: any): void {
    if (!this.isShow) {
      this.isShow = !this.isShow;
    }
    
    console.log(error);
  }

  private handleLoginMessage(resp: Object): void {
    var token = resp[consts.TOKEN_NAME];

    if (this.authService.authenticate(token)) {
      this.setTokenCookie(consts.TOKEN_NAME, token);
      this.loginStatus();
    }
  }

  private loginStatus(): void {
    this.userService.changeLoggingStatus();
    this.userService.emitLoggingStatus();
    this.router.navigate(["/boards"]);
  }

  private setTokenCookie(name: string, value: string): void {
    document.cookie = `${name}=${value};`;
  }

  private getAuthenticationJSON(): string {
    return `{"username": "${this.username}", "password": "${this.password}"}`;
  }

}
