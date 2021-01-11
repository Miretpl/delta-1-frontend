import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { ListModule } from 'src/app/list/list.module';
import { CardModule } from 'src/app/card/card.module';

import { ViewBoardComponent } from './view-board/view-board.component';
import { CreateBoardComponent } from './create-board/create-board.component';
import { ChangeBoardNameComponent } from './view-board/change-board-name/change-board-name.component';
import { InviteUserToBoardComponent } from './view-board/invite-user-to-board/invite-user-to-board.component';
import { ShowUsersComponent } from './view-board/show-users/show-users.component';



@NgModule({
  declarations: [
    ViewBoardComponent,
    CreateBoardComponent,
    ChangeBoardNameComponent,
    InviteUserToBoardComponent,
    ShowUsersComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ListModule,
    CardModule,
    FormsModule,
    DragDropModule
  ],
  exports:[
    CreateBoardComponent,
    InviteUserToBoardComponent,
    ViewBoardComponent
  ]
})
export class BoardModule { }
