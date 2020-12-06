import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api/api.service';
import { consts } from 'src/app/config/consts';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {
  @Output("visibleAddListForm") visibleAddListForm: EventEmitter<any> = new EventEmitter();
  @Output("getCardLists") getCardLists: EventEmitter<any> = new EventEmitter();

  @Input() boardId: number;

  createListForm: FormGroup;
  submitted = false;
  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.createListForm = new FormBuilder().group({
      listName: ['', [Validators.required]]
    })
  }

  get getFormControls(): any {
    return this.createListForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.createListForm.invalid) {
      return;
    }

    if (this.submitted) {
      this.apiService.createList(this.getData(), consts.LIST_CREATE_ENDPOINT).subscribe(
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
