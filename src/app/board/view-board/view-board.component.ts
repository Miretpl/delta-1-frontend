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
  cardLists: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.boardId = this.activatedRoute.snapshot.params.board_id;
    // send request to backend to get all information about the board
    this.boardName = "test board 1";

    this.cardLists = [
      {
        name: "lista 1",
        cards: [
          {
            id: 1,
            name: "karta 1"
          },
          {
            id: 2,
            name: "karta 2"
          }
        ]
      },
      {
        name: "lista 2",
        cards: [
          {
            id: 3,
            name: "karta 1"
          },
          {
            id: 4,
            name: "karta 2"
          }
        ]
      }
    ]
  }
}
