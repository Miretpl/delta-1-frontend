import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ListComponent } from './board/list/list.component';
import { LoginComponent } from './user/login/login.component';
import { AuthGuardService } from './user/auth/auth-guard.service';

const routes: Routes = [
  {path: 'boards-list', component: ListComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
