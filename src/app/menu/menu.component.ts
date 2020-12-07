import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { environment } from 'src/environments/environment';
import { UserService } from 'src/app/user/service/user.service';
import { ApiService } from 'src/app/api/api.service';
import { endpoints } from 'src/app/config/endpoints';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  envName = environment.environmentName;
  isLogged: boolean;

  constructor(private userService: UserService, private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
    this.userService.getLoggingStatus().subscribe((item: boolean) => this.isLogged = item);
    this.userService.emitLoggingStatus();
  }

  logout(): void {
    this.apiService.executePostRequest(endpoints.LOGOUT, null, true).subscribe(
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
