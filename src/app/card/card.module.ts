import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateCardComponent } from './create-card/create-card.component';



@NgModule({
  declarations: [
    CreateCardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CreateCardComponent
  ]
})
export class CardModule { }
