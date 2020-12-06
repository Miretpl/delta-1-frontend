import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-in-list',
  templateUrl: './card-in-list.component.html',
  styleUrls: ['./card-in-list.component.css']
})
export class CardInListComponent implements OnInit {
  @Input() id: number;
  @Input() name: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
