import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardModule } from 'src/app/board/board.module';

import { BoardInListComponent } from './board-in-list/board-in-list.component'



@NgModule({
  declarations: [
    BoardInListComponent
  ],
  imports: [
    CommonModule,
    BoardModule
  ]
})
export class HomeModule { }
