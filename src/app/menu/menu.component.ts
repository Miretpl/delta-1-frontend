import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  envName = environment.environmentName;
  isLogged: boolean;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getLoggingStatus().subscribe((item: boolean) => this.isLogged = item);
    this.userService.emitLoggingStatus();
  }

  logout() {
    this.userService.removeToken();
    this.userService.changeLoggingStatus();
    this.userService.emitLoggingStatus();
  }
}
