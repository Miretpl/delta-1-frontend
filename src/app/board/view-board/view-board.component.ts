import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-board',
  templateUrl: './view-board.component.html',
  styleUrls: ['./view-board.component.css']
})
export class ViewBoardComponent implements OnInit {
  boardId: number;
  boardName: string;
  boardGroup: FormGroup;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.boardId = this.activatedRoute.snapshot.params.board_id;
    
    this.boardName = "test board 1";

    this.boardGroup = new FormGroup({
      name: new FormControl(this.boardName, Validators.required)
      });
  }

  updateBoardName() : void {
    console.log(this.boardName);
  }
}
