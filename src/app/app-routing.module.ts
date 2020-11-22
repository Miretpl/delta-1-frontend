import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardsOverviewComponent } from './board/boards-overview/boards-overview.component';
import { ViewBoardComponent } from './board/view-board/view-board.component';
import { LoginComponent } from './user/login/login.component';
import { AuthGuardService } from './user/auth/auth-guard.service';
import { AuthGuardNotService } from './user/auth/auth-guard-not.service';

const routes: Routes = [
  {path: 'boards', component: BoardsOverviewComponent, canActivate: [AuthGuardService]},
  {path: 'boards/:board_id', component: ViewBoardComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent, canActivate: [AuthGuardNotService]},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
