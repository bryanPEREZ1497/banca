import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransferenciaComponent } from "./Components/transferencia/transferencia.component";
import { CuentaComponent } from "./Components/cuenta/cuenta.component";
import { PagoComponent } from "./Components/pago/pago.component";
import { PageNotFoundComponent } from "./Components/page-not-found/page-not-found.component";
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AuthGuard } from "./auth.guard";
const routes: Routes = [
  {
    path: 'transferencias',
    component: TransferenciaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cuentas',
    component: CuentaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'pagos',
    component: PagoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/cuentas',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }