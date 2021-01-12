import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api/api.service';
import { endpoints } from 'src/app/config/endpoints';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {
  private ADD_LIST_BUTTON_HEIGHT_MAX_ERROR: number = 125;
  
  @Output("visibleAddListForm") visibleAddListForm: EventEmitter<any> = new EventEmitter();
  @Output("getCardLists") getCardLists: EventEmitter<any> = new EventEmitter();
  @Output("updateAddListButtonHeight") updateAddListButtonHeight: EventEmitter<any> = new EventEmitter();

  @Input() boardId: number;

  createListForm: FormGroup;
  submitted = false;
  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.createListForm = new FormBuilder().group({
      listName: ['', [Validators.required]]
    });
  }

  get getFormControls(): any {
    return this.createListForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.createListForm.invalid) {
      this.updateAddListButtonHeight.emit({ height: this.ADD_LIST_BUTTON_HEIGHT_MAX_ERROR });
      return;
    }

    if (this.submitted) {
      this.apiService.executePutRequest(endpoints.LIST_CREATE, this.getData()).subscribe(
        resp => {
          console.log("List created");
          this.close();
        },
        error => console.error(error)
      );
    }
  }

  public close(): void {
    this.getCardLists.emit();
    this.visibleAddListForm.emit();
  }

  private getData(): object {
    return {
      name: this.createListForm.get("listName").value,
      boardId: this.boardId
    };
  }
  
}
