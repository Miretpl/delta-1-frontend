import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { endpoints } from 'src/app/config/endpoints';

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

  updateDescription(): void {
    if (this.description != $("#newDescription").val()) {
      this.apiService.executePostRequest(`${endpoints.CARD_EDIT}/${this.id}`, this.getData($("#newDescription").val()), true).subscribe(
        resp => {
          console.log("Card description changed");
          this.description = $("#newDescription").val();
          this.requestCardData.emit();
        },
        error => console.error(error)
      );

      this.visibleChangeDescription.emit();
    }
  }

  close(): void {
    if (this.description.length > 0) {
      this.visibleChangeDescription.emit();
    }
  }

  private getData(newValue: string): object {
    return {
      name: "description",
      value: newValue
    }
  }

}
