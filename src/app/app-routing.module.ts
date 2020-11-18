import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardsOverviewComponent } from './board/boards-overview/boards-overview.component';
import { LoginComponent } from './user/login/login.component';
import { AuthGuardService } from './user/auth/auth-guard.service';

const routes: Routes = [
  {path: 'boards', component: BoardsOverviewComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
