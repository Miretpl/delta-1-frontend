import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-board',
  templateUrl: './view-board.component.html',
  styleUrls: ['./view-board.component.css']
})
export class ViewBoardComponent implements OnInit {
  board_id: number;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.board_id = this.activatedRoute.snapshot.params.board_id;
  }
}
