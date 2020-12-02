import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BoardsOverviewComponent } from './boards-overview/boards-overview.component';
import { CreateBoardComponent } from './create-board/create-board.component';
import { ListBoardsComponent } from './list-boards/list-boards.component';
import { ViewBoardComponent } from './view-board/view-board.component';
import { BoardNameComponent } from './view-board/board-name/board-name.component';
import { ListComponent } from './view-board/list/list.component';
import { CardComponent } from './view-board/card/card.component';
import { NewListComponent } from './view-board/new-list/new-list.component';
import { NewCardComponent } from './view-board/new-card/new-card.component';

@NgModule({
  declarations: [
    BoardsOverviewComponent,
    CreateBoardComponent,
    ListBoardsComponent,
    ViewBoardComponent,
    BoardNameComponent,
    ListComponent,
    CardComponent,
    NewListComponent,
    NewCardComponent
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
    BoardNameComponent,
    NewListComponent,
    NewCardComponent
  ]
})

export class BoardModule { }
