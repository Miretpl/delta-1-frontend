import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list-boards.component.html',
  styleUrls: ['./list-boards.component.css']
})
export class ListBoardsComponent implements OnInit {
  private BOARD_LIST_ENDPOINT = '/board/list';
  publicBoards = [];
  privateBoards = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getBoardList(this.BOARD_LIST_ENDPOINT).subscribe(
      resp => this.boardsSeperationByVisibility(resp),
      error => console.error(error)
    );
  }

  private boardsSeperationByVisibility(body: any) {
    body.forEach((board: { is_public: any; }) => {
      if (board.is_public) {
        this.publicBoards.push(board);
      } else {
          this.privateBoards.push(board);
      }
    });
  }
}
