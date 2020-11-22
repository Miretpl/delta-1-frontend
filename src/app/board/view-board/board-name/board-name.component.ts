import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-name',
  templateUrl: './board-name.component.html',
  styleUrls: ['./board-name.component.css']
})
export class BoardNameComponent implements OnInit {
  private ENTER_CODE: string = "Enter";
  private BACKSPACE_CODE: string = "Backspace";
  private MAX_NAME_LENGTH: number = 32;

  @Input() id: number;
  @Input() name: string;

  constructor() { }

  ngOnInit(): void {
  }

  checkCharacters(event: any, text: string) : boolean {
    if (event.code == this.ENTER_CODE) {
      event.target.blur();
    } else if (text.length >= this.MAX_NAME_LENGTH) {
      return event.code == this.BACKSPACE_CODE;
    }

    return true;
  }

  updateName(value: string) : void {
    if (this.name != value) {
      // send request to database if good set boardName new value
      this.name = value;
    }
  }
}
