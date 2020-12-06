import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { consts } from 'src/app/config/consts';

@Component({
  selector: 'app-change-board-name',
  templateUrl: './change-board-name.component.html',
  styleUrls: ['./change-board-name.component.css']
})
export class ChangeBoardNameComponent implements OnInit {
  private ENTER_CODE: string = "Enter";
  private NUMPAD_ENTER_CODE: string = "NumpadEnter";
  private BACKSPACE_CODE: string = "Backspace";
  private ARROW_LEFT_CODE: string = "ArrowLeft";
  private ARROW_RIGHT_CODE: string = "ArrowRight";
  private ARROW_UP_CODE: string = "ArrowUp";
  private ARROW_DOWN_CODE: string = "ArrowDown";
  private MAX_NAME_LENGTH: number = 32;

  @Input() id: number;
  @Input() name: string;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  checkCharacters(event: any, text: string) : boolean {
    if (event.code == this.ENTER_CODE || event.code == this.NUMPAD_ENTER_CODE) {
      event.target.blur();
    } else if (text.length >= this.MAX_NAME_LENGTH) {
      return this.isAllowedCode(event.code);
    }

    return true;
  }

  isAllowedCode(code: string): boolean {
    return code == this.BACKSPACE_CODE || code == this.ARROW_LEFT_CODE || code == this.ARROW_RIGHT_CODE
      || code == this.ARROW_UP_CODE || code == this.ARROW_DOWN_CODE;
  }

  updateName(value: string) : void {
    if (this.name != value) {
      var endpoint = `${consts.BOARD_EDIT_ENDPOINT}/${this.id}`; 

      this.apiService.executePostRequest(endpoint, this.getData(value), true).subscribe(
        resp => {
          console.log("Board name changed");
          this.name = value;
        },
        error => console.error(error)
      );
    }
  }

  private getData(newValue: string): object {
    return {
      name: "name",
      value: newValue
    }
  }
  
}
