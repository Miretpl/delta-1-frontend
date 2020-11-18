import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { UserService } from '../user/user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  envName = environment.environmentName;
  isLogged: boolean;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getLoggingStatus().subscribe((item: boolean) => this.isLogged = item);
    this.userService.emitLoggingStatus();
  }

  logout() {
    this.userService.removeToken();
    this.userService.changeLoggingStatus();
    this.userService.emitLoggingStatus();
    this.router.navigate(["/"]);
  }
}
