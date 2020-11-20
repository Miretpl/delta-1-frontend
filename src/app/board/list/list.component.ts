import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api/api.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private BOARD_LIST_ENDPOINT = '/board/list';
  boards_public = [];
  boards_private = [];

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
        this.boards_public.push(board);
      } else {
          this.boards_private.push(board);
      }
    });
  }
}
