import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-invite-user-to-board',
  templateUrl: './invite-user-to-board.component.html',
  styleUrls: ['./invite-user-to-board.component.css']
})
export class InviteUserToBoardComponent implements OnInit {
  @Output("visibleInviteUserToBoardComponent") visibleInviteUserToBoardComponent: EventEmitter<any> = new EventEmitter();

  @Input() boardId: number;

  constructor() { }

  ngOnInit(): void {
  }

  closeInviteUserToBoardComponent() {
    this.visibleInviteUserToBoardComponent.emit();
  }

}
