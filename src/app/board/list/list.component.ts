import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  boards = [];
  constructor() { }

  ngOnInit(): void {
    this.boards = [ {name: "Board 1", description: "Desc 2"}, {name: "Board 1", description: "Desc 2"} ]
  }
}
