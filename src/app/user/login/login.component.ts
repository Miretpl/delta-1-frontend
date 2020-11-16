import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  homePage = '';
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getTestData().subscribe((data: string) => {
      console.log(data);
      this.homePage = data;
    }) ;
  }
}
