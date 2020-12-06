import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { consts } from 'src/app/config/consts';

declare var $: any;

@Component({
  selector: 'app-change-card-description',
  templateUrl: './change-card-description.component.html',
  styleUrls: ['./change-card-description.component.css']
})
export class ChangeCardDescriptionComponent implements OnInit {
  @Output() visibleChangeDescription: EventEmitter<any> = new EventEmitter();
  @Output() requestCardData: EventEmitter<any> = new EventEmitter();

  @Input() id: number;
  @Input() description: string;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.description != $("#newDescription").val()) {
      this.apiService.executePostRequest(`${consts.CARD_EDIT_ENDPOINT}/${this.id}`, this.getData($("#newDescription").val()), true).subscribe(
        resp => {
          console.log("Card description changed");
          this.description = $("#newDescription").val();
          this.requestCardData.emit();
        },
        error => console.error(error)
      );
    }

    this.onClose();
  }

  onClose(): void {
    this.visibleChangeDescription.emit();
  }

  private getData(newValue: string): object {
    return {
      name: "description",
      value: newValue
    }
  }

}
