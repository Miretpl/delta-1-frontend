import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private ENDPOINT_NAME: string = "/register";

  isShow: boolean = false;
  
  email: string;
  username: string;
  
  password: string;
  retype_password: string;

  firstname: string;
  surname: string;
  description: string;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  register() {
    if (this.password !== this.retype_password && !this.isShow) {
      this.isShow = !this.isShow;
      return;
    } 
    
    this.handleRegistering(this.getData());
  }

  private handleRegistering(data: any) {
    console.log(data);
    this.apiService.register(data, this.ENDPOINT_NAME).subscribe(
      resp => this.handleRegisterMessage(resp),
      error => this.handleRegisterErrorMessage(error)
    );
  }

  private handleRegisterErrorMessage(error: any) {
    if (!this.isShow) {
      this.isShow = !this.isShow;
    }
    console.log(error);
  }

  private handleRegisterMessage(resp: Object) {
    this.router.navigate(["/login"]);
  }

  private getData() {
    return {
      username: this.username,
      firstname: this.firstname,
      surname: this.surname,
      password: this.password,
      email: this.email,
      description: this.description 
    };
  }
}