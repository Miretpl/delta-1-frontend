import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { endpoints } from 'src/app/config/endpoints';

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
    this.getBoardList();
  }

  getBoardList(): void {
    this.apiService.executeGetRequest(endpoints.BOARD_LIST).subscribe(
      resp => this.boardsSeperationByVisibility(resp),
      error => console.error(error)
    );
  }

  private boardsSeperationByVisibility(body: any): void {
    body.forEach((board: { isPublic: any; }) => {
      if (board.isPublic) {
        this.publicBoards.push(board);
      } else {
          this.privateBoards.push(board);
      }
    });
  }

}
