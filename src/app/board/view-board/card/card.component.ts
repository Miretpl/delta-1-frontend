import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() id: number;
  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }
}
