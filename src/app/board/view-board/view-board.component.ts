import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-board',
  templateUrl: './view-board.component.html',
  styleUrls: ['./view-board.component.css']
})
export class ViewBoardComponent implements OnInit {
  boardId: number;
  boardName: string;
  
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.boardId = this.activatedRoute.snapshot.params.board_id;
    this.boardName = "test board 1";
  }

  updateBoardName(value: string) {
    if (this.boardName != value) {
      // send request to backend
      this.boardName = value;
    } else {
      console.log("board name without change")
    }
  }
}
