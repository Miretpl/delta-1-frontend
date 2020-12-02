import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { UserService } from '../user/user.service';
import { ApiService } from '../api/api.service';

import { Router } from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private ENDPOINT_NAME: string = "/logout";

  envName = environment.environmentName;
  isLogged: boolean;

  constructor(private userService: UserService, private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
    this.userService.getLoggingStatus().subscribe((item: boolean) => this.isLogged = item);
    this.userService.emitLoggingStatus();
  }

  logout(): void {
    this.apiService.logout(this.ENDPOINT_NAME).subscribe(
      resp => this.handleLogout(),
      error => console.error(error)
    );

    
  }

  private handleLogout(): void {
    this.userService.removeToken();
    this.userService.changeLoggingStatus();
    this.userService.emitLoggingStatus();
    this.router.navigate(["/"]);
  }
}
