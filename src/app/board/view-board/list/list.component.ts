import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-list-cards',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() cards: any;
  @Input() name: string;
  @Input() boardId: number;
  @Input() listId: number;

  @Output("getCardLists") getCardLists: EventEmitter<any> = new EventEmitter();

  visibleAddCard: boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

  visibleAddCardForm(): void {
   this.visibleAddCard = !this.visibleAddCard;
   console.log(this.listId); 
  }

  getCardListsForListComponent(): void {
    this.getCardLists.emit();
  }

}
