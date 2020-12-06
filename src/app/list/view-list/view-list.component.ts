import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {
  @Output("getCardLists") getCardLists: EventEmitter<any> = new EventEmitter();
  @Output("visibleCardViewModal") visibleCardViewModal: EventEmitter<any> = new EventEmitter();

  @Input() cards: any;
  @Input() name: string;
  @Input() boardId: number;
  @Input() listId: number;

  visibleAddCard: boolean;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  openCardView(cardId: string, listName: string): void {
    this.apiService.setCookie("cardId", cardId);
    this.apiService.setCookie("listName", listName);

    this.visibleCardViewModal.emit();
  }

  visibleAddCardForm(): void {
    this.visibleAddCard = !this.visibleAddCard;
  }
 
  getCardListsForListComponent(): void {
    this.getCardLists.emit();
  }

}
