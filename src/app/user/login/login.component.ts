import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { ApiService } from 'src/app/api/api.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private TOKEN_NAME: string = "token";
  private ENDPOINT_NAME: string = "login";
  private token: any;

  isShow: boolean = false;
  username: string;
  password: string;

  constructor(private apiService: ApiService, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  login() {
    this.handleLogging(this.getAuthenticationJSON());
  }

  private handleLogging(data: any) {
    this.apiService.send(this.ENDPOINT_NAME, data).subscribe(
      resp => {
        this.token = resp[this.TOKEN_NAME];
        this.setTokenCookie();

        if (this.token != null) {
          this.loginStatus();
        }
      },
      error => {
        this.isShow = !this.isShow;
        console.log(error);
      }
    );
  }

  private loginStatus() {
    this.userService.changeLoggingStatus();
    this.userService.emitLoggingStatus();
    this.router.navigate(["/boards"]);
  }

  private setTokenCookie() {
    document.cookie = this.TOKEN_NAME + "=" + this.token + ";";
  }

  private getAuthenticationJSON() {
    return `{"username": "${this.username}", "password": "${this.password}"}`;
  }

}
