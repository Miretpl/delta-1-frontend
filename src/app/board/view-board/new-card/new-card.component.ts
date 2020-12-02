import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ApiService } from '../../../api/api.service';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.css']
})
export class NewCardComponent implements OnInit {
  private LIST_CREATE_ENDPOINT = '/card/create';

  @Output("visibleAddCardForm") visibleAddCardForm: EventEmitter<any> = new EventEmitter();
  @Output("getCardListsForListComponent") getCardListsForListComponent: EventEmitter<any> = new EventEmitter();
  @Input() board_id: number;
  @Input() list_id: number;

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

  onSubmit(): void {
    this.submitted = true;

    if (this.createCardForm.invalid) {
      return;
    }

    if (this.submitted) {
      this.apiService.createCard(this.getData(), this.LIST_CREATE_ENDPOINT).subscribe(
        resp => {
          console.log("List created");
          this.close();
        },
        error => console.error(error)
      );

      this.close(); 
    }
  }

  public close(): void {
    this.getCardListsForListComponent.emit();
    this.visibleAddCardForm.emit();
  }

  private getData(): object {
    return {
      name: this.createCardForm.get("cardName").value,
      boardId: Number(this.board_id),
      listId: Number(this.list_id)
    };
  }
}