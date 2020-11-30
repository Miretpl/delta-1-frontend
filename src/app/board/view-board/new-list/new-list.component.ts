import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ApiService } from '../../../api/api.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent implements OnInit {
  private LIST_CREATE_ENDPOINT = '/list/create';

  @Output("visibleAddListForm") visibleAddListForm: EventEmitter<any> = new EventEmitter();
  @Input() board_id: number;

  createListForm: FormGroup;
  submitted = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.createListForm = new FormBuilder().group({
      listName: ['', [Validators.required]]
    })
  }

  get getFormControls() {
    return this.createListForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.createListForm.invalid) {
      return;
    }

    if (this.submitted) {
      this.apiService.createList(this.getData(), this.LIST_CREATE_ENDPOINT).subscribe(
        resp => {
          console.log("List created");
          this.close();
        },
        error => {
          console.error(error);
          this.close(); 
        }
      );
    }
  }

  public close() {
    this.visibleAddListForm.emit();
  }

  private getData() {
    return {
      name: this.createListForm.get("listName").value,
      boardId: this.board_id
    };
  }
}