import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../../api/api.service'

@Component({
  selector: 'app-board-name',
  templateUrl: './board-name.component.html',
  styleUrls: ['./board-name.component.css']
})
export class BoardNameComponent implements OnInit {
  private ENTER_CODE: string = "Enter";
  private NUMPAD_ENTER_CODE: string = "NumpadEnter";
  private BACKSPACE_CODE: string = "Backspace";
  private MAX_NAME_LENGTH: number = 32;
  private BOARD_EDIT_ENDPOINT: string = "/board/edit";

  @Input() id: number;
  @Input() name: string;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  checkCharacters(event: any, text: string) : boolean {
    if (event.code == this.ENTER_CODE || event.code == this.NUMPAD_ENTER_CODE) {
      event.target.blur();
    } else if (text.length >= this.MAX_NAME_LENGTH) {
      return event.code == this.BACKSPACE_CODE;
    }

    return true;
  }

  updateName(value: string) : void {
    if (this.name != value) {
      var endpoint = `${this.BOARD_EDIT_ENDPOINT}/${this.id}`; 

      this.apiService.editBoardElement(this.getData(value), endpoint).subscribe(
        resp => {
          console.log("Board name changed");
          this.name = value;
        },
        error => console.error(error)
      );
    }
  }

  private getData(newValue: string) {
    return {
      name: "name",
      value: newValue
    }
  }
}
