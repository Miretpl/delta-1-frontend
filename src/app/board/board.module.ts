import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BoardsOverviewComponent } from './boards-overview/boards-overview.component';
import { CreateBoardComponent } from './create-board/create-board.component';
import { ListBoardsComponent } from './list-boards/list-boards.component';

@NgModule({
  declarations: [
    BoardsOverviewComponent,
    CreateBoardComponent,
    ListBoardsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    BoardsOverviewComponent,
    CreateBoardComponent,
    ListBoardsComponent
  ]
})

export class BoardModule { }
