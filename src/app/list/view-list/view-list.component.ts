import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {
  @Output("getCardLists") getCardLists: EventEmitter<any> = new EventEmitter();

  @Input() cards: any;
  @Input() name: string;
  @Input() boardId: number;
  @Input() listId: number;

  visibleAddCard: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  visibleAddCardForm(): void {
    this.visibleAddCard = !this.visibleAddCard;
   }
 
   getCardListsForListComponent(): void {
     this.getCardLists.emit();
   }

}
