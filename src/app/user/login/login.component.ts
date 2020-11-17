import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { ApiService } from 'src/app/api/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private TOKEN_NAME: string = "token";
  private ENDPOINT_NAME: string = "login";
  
  isShow: boolean = false;
  username: string;
  password: string;

  private token: any;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.sendLoginMessage(this.getAuthenticationJSON());
    this.setTokenCookie();

    if (this.token != null) {
      this.router.navigate(["/boards-list"]);
    }
  }

  private sendLoginMessage(data: any) {
    this.apiService.send(this.ENDPOINT_NAME, data).subscribe(
      resp => this.token = resp.body[this.TOKEN_NAME],
      error => this.isShow = !this.isShow
    );
  }

  private setTokenCookie() {
    document.cookie = this.TOKEN_NAME + "=" + this.token + ";";
  }

  private getAuthenticationJSON() {
    return "{\"username\":\"" + this.username + "\", \"password\":\"" + this.password + "\"}";
  }

}
