import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateCardComponent } from './create-card/create-card.component';
import { ViewCardComponent } from './view-card/view-card.component';
import { ChangeCardNameComponent } from './view-card/change-card-name/change-card-name.component';
import { ChangeCardDescriptionComponent } from './view-card/change-card-description/change-card-description.component';



@NgModule({
  declarations: [
    CreateCardComponent,
    ViewCardComponent,
    ChangeCardNameComponent,
    ChangeCardDescriptionComponent
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
