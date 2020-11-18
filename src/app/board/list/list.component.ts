import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api/api.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private BOARD_LIST_ENDPOINT = '/board/list';
  boards: any;
  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getBoardList(this.BOARD_LIST_ENDPOINT).subscribe(
      resp => this.boards = resp,
      error => console.error(error)
    );
  }
}
