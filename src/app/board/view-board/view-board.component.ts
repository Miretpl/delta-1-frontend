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
  visible : boolean;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.boardId = Number(this.activatedRoute.snapshot.params.board_id);
    // send request to backend to get all information about the board
    this.boardName = "test board 1";
    this.cardLists = [
      { name: "lista 1", cards: [ { id: 1, name: "karta 1" }, { id: 2, name: "karta 2" } ] },
      { name: "lista 2", cards: [ { id: 3, name: "karta 1" }, { id: 3, name: "karta 1" }, { id: 4, name: "karta 2" } ] },
      { name: "lista 3", cards: [ { id: 3, name: "karta 1" }, { id: 3, name: "karta 1" }, { id: 4, name: "karta 2" } ] },
      { name: "lista 4", cards: [ { id: 4, name: "karta 2" }, { id: 4, name: "karta 2" }, { id: 4, name: "karta 2" }, { id: 4, name: "karta 2" }, { id: 4, name: "karta 2" }, { id: 4, name: "karta 2" }, { id: 4, name: "karta 2" }, { id: 4, name: "karta 2" }, { id: 4, name: "karta 2" }, { id: 4, name: "karta 2" }, { id: 4, name: "karta 2" }, { id: 4, name: "karta 2" }, { id: 4, name: "karta 2" }, { id: 4, name: "karta 2" }, { id: 4, name: "karta 2" }, { id: 4, name: "karta 2" }, { id: 4, name: "karta 2" }, { id: 4, name: "karta 2" }, { id: 4, name: "karta 2" } ] },
      { name: "lista 5", cards: [ { id: 3, name: "karta 1" }, { id: 4, name: "karta 2" } ] },
      { name: "lista 6", cards: [ { id: 3, name: "karta 1" }, { id: 4, name: "karta 2" } ] },
      { name: "lista 6", cards: [ { id: 3, name: "karta 1" }, { id: 4, name: "karta 2" } ] },
      { name: "lista 6", cards: [ { id: 3, name: "karta 1" }, { id: 4, name: "karta 2" } ] },
      { name: "lista 6", cards: [ { id: 3, name: "karta 1" }, { id: 4, name: "karta 2" } ] },
      { name: "lista 7", cards: [ { id: 3, name: "karta 1" }, { id: 4, name: "karta 2" } ] }
    ]
  }

  turnOnWindow(): void {
    this.visible = !this.visible;
  }
}
