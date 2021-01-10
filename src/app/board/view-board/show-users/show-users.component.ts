import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {
  @Input() username: string;

  usernameFirstLetter: string;

  constructor() { }

  ngOnInit(): void {
    this.extractUsernameFirstLetter();
  }


  private extractUsernameFirstLetter(): void {
    if (this.isUsername()) {
      this.usernameFirstLetter = this.username.charAt(0);
    }
  }

  private isUsername(): boolean {
    return this.username != null && this.username.length > 0;
  }
}
