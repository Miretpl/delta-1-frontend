import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { CreateCardComponent } from './create-card/create-card.component';
import { ViewCardComponent } from './view-card/view-card.component';
import { ChangeCardNameComponent } from './view-card/change-card-name/change-card-name.component';
import { ChangeCardDescriptionComponent } from './view-card/change-card-description/change-card-description.component';
import { ChangeDueDateComponent } from './view-card/change-due-date/change-due-date.component';
import { ShowActivityComponent } from './view-card/show-activity/show-activity.component';



@NgModule({
  declarations: [
    CreateCardComponent,
    ViewCardComponent,
    ChangeCardNameComponent,
    ChangeCardDescriptionComponent,
    ChangeDueDateComponent,
    ShowActivityComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  exports: [
    CreateCardComponent,
    ViewCardComponent
  ]
})
export class CardModule { }
