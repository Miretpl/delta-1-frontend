import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { keys } from 'src/app/config/keys';
import { endpoints } from 'src/app/config/endpoints';

@Component({
  selector: 'app-change-list-name',
  templateUrl: './change-list-name.component.html',
  styleUrls: ['./change-list-name.component.css']
})
export class ChangeListNameComponent implements OnInit {
  private MAX_NAME_LENGTH: number = 32;

  @Input() id: number;
  @Input() name: string;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  checkCharacters(event: any, text: string) : boolean {
    if (event.code == keys.ENTER_CODE || event.code == keys.NUMPAD_ENTER_CODE) {
      event.target.blur();
    } else if (text.length >= this.MAX_NAME_LENGTH) {
      return this.isAllowedKeyCode(event.code);
    }

    return true;
  }

  isAllowedKeyCode(code: string): boolean {
    return code == keys.BACKSPACE_CODE || code == keys.ARROW_LEFT_CODE || code == keys.ARROW_RIGHT_CODE
      || code == keys.ARROW_UP_CODE || code == keys.ARROW_DOWN_CODE;
  }

  updateName(value: string) : void {
    if (this.name != value) {
      var endpoint = `${endpoints.LIST_EDIT}/${this.id}`; 

      this.apiService.executePostRequest(endpoint, this.getData(value), true).subscribe(
        resp => {
          console.log("List name changed");
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
