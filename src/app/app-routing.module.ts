import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardsOverviewComponent } from './board/boards-overview/boards-overview.component';

const routes: Routes = [
  {path: 'boards', component: BoardsOverviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
