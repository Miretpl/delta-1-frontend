import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-list-cards',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() cards: any;
  @Input() name: string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.name);
    console.log(this.cards);
  }

}
