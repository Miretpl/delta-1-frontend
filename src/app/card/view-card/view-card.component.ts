import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-view-card',
  templateUrl: './view-card.component.html',
  styleUrls: ['./view-card.component.css']
})
export class ViewCardComponent implements OnInit {
  @Output("visibleCardViewModal") visibleCardViewModal: EventEmitter<any> = new EventEmitter();

  cardId: number;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.cardId = Number(this.apiService.getCookie("cardId"));
  }

  closeCardView(): void {
    this.apiService.setCookie("cardId", "");
    this.visibleCardViewModal.emit();
  }

}