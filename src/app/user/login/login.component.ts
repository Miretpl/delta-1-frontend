import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  login() {
    var data = "{\"username\":\"" + "kowalski" + "\", \"password\":\"" + "pass123" + "\"}";
    console.log(data);
    var response = this.apiService.send("login", data);
    console.log(response); 
  }

}
