import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { endpoints } from 'src/app/config/endpoints';

declare var $: any;

@Component({
  selector: 'app-view-card',
  templateUrl: './view-card.component.html',
  styleUrls: ['./view-card.component.css']
})
export class ViewCardComponent implements OnInit {
  @Output("visibleCardViewModal") visibleCardViewModal: EventEmitter<any> = new EventEmitter();
  @Output("getCardLists") getCardLists: EventEmitter<any> = new EventEmitter();

  cardId: number;
  listName: string;
  name: string;
  description: string;
  isArchive: boolean;
  isInsideClickComponent: boolean;
  visibleChangeDescriptionField: boolean;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.cardId = Number(this.apiService.getCookie("cardId"));
    this.listName = String(this.apiService.getCookie("listName"));

    this.requestCardData();
  }

  archiveCard(): void {
    this.apiService.executePostRequest(`${endpoints.CARD_EDIT}/${this.cardId}`, this.getData(true), true).subscribe(
      resp => {
        console.log("Card archived");
        this.refreshBoardAndCard();
      },
      error => console.error(error)
    );
  }

  sendCardToBoard(): void {
    this.apiService.executePostRequest(`${endpoints.CARD_EDIT}/${this.cardId}`, this.getData(false), true).subscribe(
      resp => {
        console.log("Card sent to board");
        this.refreshBoardAndCard();
      },
      error => console.error(error)
    );
  }

  deleteCard(): void {
    this.apiService.executeDeleteRequest(`${endpoints.CARD_DELETE}/${this.cardId}`).subscribe(
      resp => console.log("Card deleted"),
      error => console.error(error)
    );
  }

  visibleChangeDescription(): void {
    this.visibleChangeDescriptionField = !this.visibleChangeDescriptionField;
  }

  insideClickDetect(): void {
    this.isInsideClickComponent = true;
  }

  closeCardView(): void {
    if (this.isInsideClickComponent) {
      this.isInsideClickComponent = false;
    } else {
      this.apiService.setCookie("cardId", "");
      this.visibleCardViewModal.emit();
    }
  }

  async requestCardData(): Promise<void> {
    this.apiService.executeGetRequest(`${endpoints.CARD_GET}/${this.cardId}`).subscribe(
      resp => this.extractCardData(resp),
      error => console.error(error)
    );
  }

  extractCardData(resp: Object): void {
    this.name = resp['name'];
    this.description = resp['description'];
  }

  private async refreshBoardAndCard(): Promise<void> {
    await this.requestCardData();
    this.getCardLists.emit();
  }

  private getData(newValue: boolean): object {
    return {
      name: "isArchive",
      value: newValue
    }
  }

}
