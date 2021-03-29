import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransferenciaComponent } from "./Components/transferencia/transferencia.component";
import { CuentaComponent } from "./Components/cuenta/cuenta.component";
import { PagoComponent } from "./Components/pago/pago.component";
import { PageNotFoundComponent } from "./Components/page-not-found/page-not-found.component";
const routes: Routes = [
  {
    path: 'transferencias',
    component: TransferenciaComponent
  },
  {
    path: 'cuentas',
    component: CuentaComponent
  },
  {
    path: 'pagos',
    component: PagoComponent
  },
  {
    path: '',
    redirectTo: '/cuentas',
    pathMatch: 'full'
  },
  {
    path:'**',
    component: PageNotFoundComponent
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
