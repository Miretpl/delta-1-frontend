import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { endpoints } from 'src/app/config/endpoints';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.css']
})
export class ListMenuComponent implements OnInit {
  @Output("getCardListsForListComponent") getCardListsForListComponent: EventEmitter<any> = new EventEmitter();
  @Output("visibleListMenuComponent") visibleListMenuComponent: EventEmitter<any> = new EventEmitter();

  @Input() listId: number;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  closeListMenu() : void {
    this.visibleListMenuComponent.emit();
  }

  archiveList() : void {
    var endpoint = `${endpoints.LIST_EDIT}/${this.listId}`; 

    this.apiService.executePostRequest(endpoint, this.getData(), true).subscribe(
      resp => {
        console.log("List archived");
        this.handleArchiveListResponse();
      },
      error => console.error(error)
    );
  }

  private handleArchiveListResponse() {
    this.visibleListMenuComponent.emit();
    this.getCardListsForListComponent.emit();
  }

  private getData(): object {
    return {
      name: "isArchived",
      value: "true"
    }
  }

}