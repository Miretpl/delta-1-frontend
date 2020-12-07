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
      resp => this.extractCardData(resp),
      error => console.error(error)
    );
  }

  extractCardData(resp: Object): void {
    this.name = resp['name'];
    this.description = resp['description'];
  }

}
