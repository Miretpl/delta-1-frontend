import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api/api.service';
import { endpoints } from 'src/app/config/endpoints';

declare var $: any;

@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.component.html',
  styleUrls: ['./create-board.component.css']
})
export class CreateBoardComponent implements OnInit {
  @Output("getBoardList") getBoardList: EventEmitter<any> = new EventEmitter();
  
  createBoardForm: FormGroup;
  submitted = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.createBoardForm = new FormBuilder().group({
      boardName: ['', [Validators.required]],
      visibility: ['true', [Validators.required]]
    })
  }

  get getFormControls(): any {
    return this.createBoardForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.createBoardForm.invalid) {
      return;
    }

    if (this.submitted) {
      $("#boardcreationmodal").modal("hide");
      this.requestBoardCreation();
    }
  }

  private requestBoardCreation(): void {
    this.apiService.executePutRequest(endpoints.BOARD_CREATE, this.getData()).subscribe(
      resp => {
        console.log("Board created");
        this.getBoardList.emit();
      },
      error => console.error(error)
    );
  }

  private getData(): object {
    return {
      name: this.createBoardForm.get("boardName").value,
      is_public: this.createBoardForm.get("visibility").value == "true"
    };
  }

}
