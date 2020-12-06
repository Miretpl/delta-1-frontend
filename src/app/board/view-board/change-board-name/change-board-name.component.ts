import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { consts } from 'src/app/config/consts';

@Component({
  selector: 'app-change-board-name',
  templateUrl: './change-board-name.component.html',
  styleUrls: ['./change-board-name.component.css']
})
export class ChangeBoardNameComponent implements OnInit {
  private MAX_NAME_LENGTH: number = 32;

  @Input() id: number;
  @Input() name: string;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  checkCharacters(event: any, text: string) : boolean {
    if (event.code == consts.ENTER_CODE || event.code == consts.NUMPAD_ENTER_CODE) {
      event.target.blur();
    } else if (text.length >= this.MAX_NAME_LENGTH) {
      return this.isAllowedKeyCode(event.code);
    }

    return true;
  }

  isAllowedKeyCode(code: string): boolean {
    return code == consts.BACKSPACE_CODE || code == consts.ARROW_LEFT_CODE || code == consts.ARROW_RIGHT_CODE
      || code == consts.ARROW_UP_CODE || code == consts.ARROW_DOWN_CODE;
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
