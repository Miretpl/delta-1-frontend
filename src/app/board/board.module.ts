import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ListModule } from 'src/app/list/list.module';
import { CardModule } from 'src/app/card/card.module';

import { ViewBoardComponent } from './view-board/view-board.component';
import { CreateBoardComponent } from './create-board/create-board.component';
import { ChangeBoardNameComponent } from './view-board/change-board-name/change-board-name.component';



@NgModule({
  declarations: [
    ViewBoardComponent,
    CreateBoardComponent,
    ChangeBoardNameComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ListModule,
    CardModule
  ],
  exports:[
    CreateBoardComponent
  ]
})
export class BoardModule { }
