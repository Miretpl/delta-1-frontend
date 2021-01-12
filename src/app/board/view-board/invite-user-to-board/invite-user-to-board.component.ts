import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { endpoints } from 'src/app/config/endpoints';

@Component({
  selector: 'app-invite-user-to-board',
  templateUrl: './invite-user-to-board.component.html',
  styleUrls: ['./invite-user-to-board.component.css']
})
export class InviteUserToBoardComponent implements OnInit {
  private MAX_USERNAME_LENGTH: number = 32;
  
  @Output("visibleInviteUserToBoardComponent") visibleInviteUserToBoardComponent: EventEmitter<any> = new EventEmitter();
  @Output("getCardLists") getCardLists: EventEmitter<any> = new EventEmitter();

  @Input() boardId: number;

  username: string;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  closeInviteUserToBoardComponent(): void {
    this.visibleInviteUserToBoardComponent.emit();
  }

  inviteUserToBoard(): void {
    if (this.isCorrectUsername()) {
      var endpoint = `${endpoints.BOARD_USER_ADD}/${this.boardId}`; 

      this.apiService.executePostRequest(endpoint, this.getData(), true).subscribe(
        resp => {
          console.log("User invited");
          this.getCardLists.emit();
        },
        error => console.error(error)
      );

      this.closeInviteUserToBoardComponent();
    }
  }

  private isCorrectUsername(): boolean {
    return this.username != null && this.username != "" && this.username.length < this.MAX_USERNAME_LENGTH;
  }

  private getData(): object {
    return {
      username: this.username
    }
  }

}
