import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api/api.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  boards: [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.boards = this.apiService.getBoardList();
  }
}
