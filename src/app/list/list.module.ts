import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CardModule } from 'src/app/card/card.module';

import { ViewListComponent } from './view-list/view-list.component';
import { CreateListComponent } from './create-list/create-list.component';
import { CardInListComponent } from './card-in-list/card-in-list.component';
import { ChangeListNameComponent } from './view-list/change-list-name/change-list-name.component';
import { ListMenuComponent } from './list-menu/list-menu.component';



@NgModule({
  declarations: [
    ViewListComponent,
    CreateListComponent,
    CardInListComponent,
    ChangeListNameComponent,
    ListMenuComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardModule
  ],
  exports: [
    ViewListComponent,
    CreateListComponent
  ]
})
export class ListModule { }
