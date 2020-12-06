import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { consts } from 'src/app/config/consts';

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
  insideClick: boolean;
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
    this.insideClick = true;
  }

  closeCardView(): void {
    if (this.insideClick) {
      this.insideClick = false;
    } else {
      this.apiService.setCookie("cardId", "");
      this.visibleCardViewModal.emit();
    }
  }

  requestCardData(): void {
    this.apiService.executeGetRequest(`${consts.CARD_GET_ENDPOINT}/${this.cardId}`).subscribe(
      resp => this.extractCardData(resp),
      error => console.error(error)
    );
  }

  extractCardData(resp: Object): void {
    this.name = resp['name'];
    this.description = resp['description'];
  }

}