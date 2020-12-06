import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateCardComponent } from './create-card/create-card.component';
import { ViewCardComponent } from './view-card/view-card.component';



@NgModule({
  declarations: [
    CreateCardComponent,
    ViewCardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CreateCardComponent,
    ViewCardComponent
  ]
})
export class CardModule { }
