import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.component.html',
  styleUrls: ['./create-board.component.css']
})
export class CreateBoardComponent implements OnInit {
  createBoardForm: FormGroup;
  submitted = false;

  constructor() { }

  get f() {
    return this.createBoardForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.createBoardForm.invalid) {
      return;
    }

    if (this.submitted) {
      $("#boardcreationmodal").modal("hide");
      console.log(this.createBoardForm.get("boardName").value);
      console.log(this.createBoardForm.get("visibility").value);
    }
  }

  ngOnInit(): void {
    this.createBoardForm = new FormBuilder().group({
      boardName: ['', [Validators.required]],
      visibility: ['true', [Validators.required]]
    })
  }
}