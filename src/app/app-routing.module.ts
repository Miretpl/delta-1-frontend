import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './user/auth/auth-guard.service';
import { AuthGuardNotService } from './user/auth/auth-guard-not.service';

import { ViewBoardComponent } from './board/view-board/view-board.component';
import { BoardInListComponent } from './home/board-in-list/board-in-list.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';



const routes: Routes = [
  {path: 'boards', component: BoardInListComponent, canActivate: [AuthGuardService]},
  {path: 'boards/:boardId', component: ViewBoardComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent, canActivate: [AuthGuardNotService]},
  {path: 'register', component: RegisterComponent, canActivate: [AuthGuardNotService]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
