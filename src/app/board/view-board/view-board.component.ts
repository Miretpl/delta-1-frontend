import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';
import { consts } from 'src/app/config/consts';

@Component({
  selector: 'app-view-board',
  templateUrl: './view-board.component.html',
  styleUrls: ['./view-board.component.css']
})
export class ViewBoardComponent implements OnInit {
  private TWO_MINUTES: number = 120000;
  private interval: any;

  boardId: number;
  boardName: string;
  cardLists: any;
  visibleAddList: boolean;
  visibleCardView: boolean;

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
    this.visibleAddList = !this.visibleAddList;
  }

  public getCardLists(): void {
    this.apiService.executeGetRequest(`${consts.BOARD_GET_ENDPOINT}/${this.boardId}`).subscribe(
      resp => this.getData(resp),
      error => console.error(error)
    )
  }

  private getData(resp: Object): void {
    this.cardLists = resp['lists'];
    this.boardName = resp['name'];
    this.boardId = Number(resp['boardId']);
  }

}
