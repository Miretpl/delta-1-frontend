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
  dueDate: string;
  isArchived: boolean;
  
  isInsideClickComponent: boolean;
  
  visibleChangeDescriptionField: boolean;
  visibleMenuDueDatePicker: boolean;
  visibleTitleDueDatePicker: boolean;

  constructor(private apiService: ApiService) { }

  async ngOnInit(): Promise<void> {
    this.cardId = Number(this.apiService.getCookie("cardId"));
    this.listName = String(this.apiService.getCookie("listName"));
    
    this.requestCardData();
  }

  changeVisibilityOfTitleDueDatePicker(): void {
    this.visibleTitleDueDatePicker = !this.visibleTitleDueDatePicker;
  }

  changeVisibilityOfMenuDueDatePicker(): void {
    this.visibleMenuDueDatePicker = !this.visibleMenuDueDatePicker;
  }

  archiveCard(): void {
    this.updateCard(true, "archived");
  }

  sendCardToBoard(): void {
    this.updateCard(false, "sent to board");
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

  requestCardData(): void {
    this.apiService.executeGetRequest(`${endpoints.CARD_GET}/${this.cardId}`).subscribe(
      resp => {
        this.extractCardData(resp);
        this.visibleChangeDescriptionField = this.description == null || this.description == "" ? true : false;
      },
      error => console.error(error)
    );
  }

  private extractCardData(resp: Object): void {
    this.name = resp['name'];
    this.description = resp['description'];
    this.isArchived = resp['isArchived'];

    this.setDueDate(resp['dueDate']);
  }

  private setDueDate(text: string): void {
    if (text != null) {
      var datetimeStr = new Date(text).toLocaleString("pl-PL");
      this.setProperFormattedDueDate(datetimeStr.split(', '));
    }
  }

  private setProperFormattedDueDate(datetime: object): void {
    datetime[0] = datetime[0].replace(new RegExp(/\./g), '-');
    datetime[1] = datetime[1].slice(0, datetime[1].length - 3);

    this.dueDate = `${datetime[0]} ${datetime[1]}`;
  }

  private updateCard(newValue: boolean, message: string) {
    this.apiService.executePostRequest(`${endpoints.CARD_EDIT}/${this.cardId}`, this.getData(newValue), true).subscribe(
      resp => {
        console.log(`Card ${message}`);
        this.requestCardData();
        this.getCardLists.emit();
      },
      error => console.error(error)
    );
  }

  private getData(newValue: boolean): object {
    return {
      name: "isArchived",
      value: newValue
    }
  }

}
