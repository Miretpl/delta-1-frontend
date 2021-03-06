import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { ApiService } from 'src/app/api/api.service';
import { endpoints } from 'src/app/config/endpoints';

@Component({
  selector: 'app-view-board',
  templateUrl: './view-board.component.html',
  styleUrls: ['./view-board.component.css']
})
export class ViewBoardComponent implements OnInit {
  private TWO_MINUTES: number = 120000;
  private ADD_LIST_BUTTON_HEIGHT_MIN: number = 40;
  private ADD_LIST_BUTTON_HEIGHT_MAX: number = 99;
  private interval: any;

  boardId: number;
  boardName: string;
  cardLists: any;
  users: any;
  addListButtonHeight: number = this.ADD_LIST_BUTTON_HEIGHT_MIN;

  visibleAddList: boolean;
  visibleCardView: boolean;
  visibleInviteUserToBoardBox: boolean;

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.boardId = Number(this.activatedRoute.snapshot.params.boardId);
    this.getCardLists();
    this.interval = setInterval(() => this.getCardLists(), this.TWO_MINUTES);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  visibleCardViewModal(): void {
    this.visibleCardView = !this.visibleCardView;
  }

  visibleAddListForm(): void {
    this.addListButtonHeight = this.visibleAddList ? this.ADD_LIST_BUTTON_HEIGHT_MIN : this.ADD_LIST_BUTTON_HEIGHT_MAX;
    this.visibleAddList = !this.visibleAddList;
  }

  updateAddListButtonHeight($event: any): void {
    this.addListButtonHeight = $event.height;
  }

  visibleInviteUserToBoardComponent(): void {
    this.visibleInviteUserToBoardBox = !this.visibleInviteUserToBoardBox;
  }

  drop(event: CdkDragDrop<any>): void {
    if (event.previousIndex != event.currentIndex) {
      moveItemInArray(this.cardLists, event.previousIndex, event.currentIndex);
      this.handleDragAndDrop(event.item.element.nativeElement.id, event.currentIndex);
    }
  }

  public getCardLists(): void {
    this.apiService.executeGetRequest(`${endpoints.BOARD_GET}/${this.boardId}`).subscribe(
      resp => this.getData(resp),
      error => console.error(error)
    )
  }

  public handleDragAndDrop(listId: string, index: number): void {
    this.apiService.executePostRequest(`${endpoints.LIST_EDIT}/${listId}`, this.getDragAndDropData(index), true).subscribe(
      resp => {
        console.log("List posiotion changed.");
        this.getCardLists();
      },
      error => console.error(error)
    )
  }

  private getData(resp: Object): void {
    this.cardLists = resp['lists'];
    this.boardName = resp['name'];
    this.boardId = Number(resp['boardId']);
    this.users = resp['users'];
  }

  private getDragAndDropData(index: number): object {
    return {
      name: "orderNumber",
      value: index
    }
  }
  
}
