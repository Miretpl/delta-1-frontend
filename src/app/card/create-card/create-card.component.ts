import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api/api.service';
import { endpoints } from 'src/app/config/endpoints';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {
  @Output("visibleAddCardForm") visibleAddCardForm: EventEmitter<any> = new EventEmitter();
  @Output("getCardListsForListComponent") getCardListsForListComponent: EventEmitter<any> = new EventEmitter();

  @Input() boardId: number;
  @Input() listId: number;

  createCardForm: FormGroup;
  submitted = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.createCardForm = new FormBuilder().group({
      cardName: ['', [Validators.required]]
    })
  }

  get getFormControls(): any {
    return this.createCardForm.controls;
  }

  onSubmit(): Promise<void> {
    this.submitted = true;

    if (this.createCardForm.invalid) {
      return;
    }

    if (this.submitted) {
      this.createCard();
    }
  }

  public close(): void {
    this.visibleAddCardForm.emit();
  }

  private async createCard(): Promise<void> {
    await this.createCardRequest();
    this.close();
    this.getCardListsForListComponent.emit();
}

  private async createCardRequest(): Promise<void> {
    this.apiService.executePutRequest(endpoints.CARD_CREATE, this.getData()).subscribe(
      resp => console.log("Card created"),
      error => console.error(error)
    );
  }

  private getData(): object {
    return {
      name: this.createCardForm.get("cardName").value,
      boardId: Number(this.boardId),
      listId: Number(this.listId)
    };
  }

}
