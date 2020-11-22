import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BoardsOverviewComponent } from './boards-overview/boards-overview.component';
import { CreateBoardComponent } from './create-board/create-board.component';
import { ListBoardsComponent } from './list-boards/list-boards.component';
import { ViewBoardComponent } from './view-board/view-board.component';
import { BoardNameComponent } from './view-board/board-name/board-name.component';

@NgModule({
  declarations: [
    BoardsOverviewComponent,
    CreateBoardComponent,
    ListBoardsComponent,
    ViewBoardComponent,
    BoardNameComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    BoardsOverviewComponent,
    CreateBoardComponent,
    ListBoardsComponent,
    ViewBoardComponent,
    BoardNameComponent
  ]
})

export class BoardModule { }
