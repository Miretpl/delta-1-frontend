import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { ApiService } from 'src/app/api/api.service';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private TOKEN_NAME: string = "token";
  private ENDPOINT_NAME: string = "/login";

  isShow: boolean = false;
  username: string;
  password: string;

  constructor(private apiService: ApiService, private router: Router, private userService: UserService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    this.handleLogging(this.getAuthenticationJSON());
  }

  private handleLogging(data: any) {
    this.apiService.send(this.ENDPOINT_NAME, data).subscribe(
      resp => this.handleLoginMessage(resp),
      error => this.handleLoginErrorMessage(error)
    );
  }

  private handleLoginErrorMessage(error: any) {
    if (!this.isShow) {
      this.isShow = !this.isShow;
    }
    console.log(error);
  }

  private handleLoginMessage(resp: Object) {
    var token = resp[this.TOKEN_NAME];

    if (this.authService.authenticate(token)) {
      this.setTokenCookie(this.TOKEN_NAME, token);
      this.loginStatus();
    }
  }

  private loginStatus() {
    this.userService.changeLoggingStatus();
    this.userService.emitLoggingStatus();
    this.router.navigate(["/boards"]);
  }

  private setTokenCookie(name: string, value: string) {
    document.cookie = `${name}=${value};`;
  }

  private getAuthenticationJSON() {
    return `{"username": "${this.username}", "password": "${this.password}"}`;
  }

}
