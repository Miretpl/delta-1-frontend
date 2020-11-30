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

  showDangerMessage: boolean = false;
  
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

  register(): void {
    if (this.password !== this.retype_password && !this.showDangerMessage) {
      this.showDangerMessage = !this.showDangerMessage;
      return;
    } 
    
    this.handleRegistering(this.getData());
  }

  private handleRegistering(data: any): void {
    this.apiService.register(data, this.ENDPOINT_NAME).subscribe(
      resp => this.handleRegisterMessage(resp),
      error => this.handleRegisterErrorMessage(error)
    );
  }

  private handleRegisterErrorMessage(error: any): void {
    if (!this.showDangerMessage) {
      this.showDangerMessage = !this.showDangerMessage;
    }

    console.error(error);
  }

  private handleRegisterMessage(resp: Object): void {
    this.router.navigate(["/login"]);
  }

  private getData(): object {
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