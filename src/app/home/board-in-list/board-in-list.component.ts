import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { consts } from 'src/app/config/consts';

@Component({
  selector: 'app-board-in-list',
  templateUrl: './board-in-list.component.html',
  styleUrls: ['./board-in-list.component.css']
})
export class BoardInListComponent implements OnInit {
  publicBoards = [];
  privateBoards = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getBoardList(consts.BOARD_LIST_ENDPOINT).subscribe(
      resp => this.boardsSeperationByVisibility(resp),
      error => console.error(error)
    );
  }

  private boardsSeperationByVisibility(body: any) {
    body.forEach((board: { isPublic: any; }) => {
      if (board.isPublic) {
        this.publicBoards.push(board);
      } else {
          this.privateBoards.push(board);
      }
    });
  }

}
