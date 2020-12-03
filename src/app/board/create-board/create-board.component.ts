import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ApiService } from '../../api/api.service';

declare var $: any;

@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.component.html',
  styleUrls: ['./create-board.component.css']
})
export class CreateBoardComponent implements OnInit {
  private BOARD_CREATE_ENDPOINT = '/board/create';
  
  createBoardForm: FormGroup;
  submitted = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.createBoardForm = new FormBuilder().group({
      boardName: ['', [Validators.required]],
      visibility: ['true', [Validators.required]]
    })
  }

  get getFormControls() {
    return this.createBoardForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.createBoardForm.invalid) {
      return;
    }

    if (this.submitted) {
      $("#boardcreationmodal").modal("hide");

      this.apiService.createBoard(this.getData(), this.BOARD_CREATE_ENDPOINT).subscribe(
        resp => console.log("Board created"),
        error => console.error(error)
      );
    }
  }

  private getData() {
    return {
      name: this.createBoardForm.get("boardName").value,
      is_public: this.createBoardForm.get("visibility").value == "true"
    };
  }
}