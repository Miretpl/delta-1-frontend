import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ListComponent } from './list/list.component';
import { BoardsOverviewComponent } from './boards-overview/boards-overview.component';
import { CreateBoardComponent } from './create-board/create-board.component';

@NgModule({
  declarations: [ListComponent,
    BoardsOverviewComponent,
    CreateBoardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    ListComponent,
    CreateBoardComponent
  ]
})

export class BoardModule { }
