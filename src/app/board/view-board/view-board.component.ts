import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-board',
  templateUrl: './view-board.component.html',
  styleUrls: ['./view-board.component.css']
})
export class ViewBoardComponent implements OnInit {
  private ENTER_CODE = "Enter";
  private BACKSPACE_CODE = "Backspace";
  private MAX_BOARD_NAME_LENGTH = 32;

  boardId: number;
  boardName: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.boardId = this.activatedRoute.snapshot.params.board_id;
    this.boardName = "test board 1";
  }

  checkCharacters(event: any, text: string) : boolean {
    if (text.length >= this.MAX_BOARD_NAME_LENGTH) {
      return event.code == this.BACKSPACE_CODE;
    }

    if (event.code == this.ENTER_CODE) {
      event.target.blur();
    }

    return true;
  }

  updateBoardName(value: string) : void {
    if (this.boardName != value) {
      // send request to database if good set boardName new value
      console.log()
      this.boardName = value;
    }
  }
}
