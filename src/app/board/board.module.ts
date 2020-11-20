import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BoardsOverviewComponent } from './boards-overview/boards-overview.component';
import { CreateBoardComponent } from './create-board/create-board.component';
import { ListBoardsComponent } from './list-boards/list-boards.component';
import { ViewBoardComponent } from './view-board/view-board.component';

@NgModule({
  declarations: [
    BoardsOverviewComponent,
    CreateBoardComponent,
    ListBoardsComponent,
    ViewBoardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    BoardsOverviewComponent,
    CreateBoardComponent,
    ListBoardsComponent,
    ViewBoardComponent
  ]
})

export class BoardModule { }
