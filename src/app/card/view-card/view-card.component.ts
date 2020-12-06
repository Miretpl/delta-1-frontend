import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';

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

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.cardId = Number(this.apiService.getCookie("cardId"));
    this.listName = String(this.apiService.getCookie("listName"));

    this.getCardData();
  }

  closeCardView(): void {
    $("#cardviewmodal").modal("hide");
    this.apiService.setCookie("cardId", "");
    this.visibleCardViewModal.emit();
  }

  getCardData(): void {
    this.name = "nazwa testowej karty";
    this.description = "opis testowej karty";
  }

}