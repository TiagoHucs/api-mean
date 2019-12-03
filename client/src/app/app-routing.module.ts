import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './security/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  /* { path: 'cadastro', component: CadastroComponent}, */
];
const routesC: Routes = [
  { path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule), canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forChild(routesC)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
