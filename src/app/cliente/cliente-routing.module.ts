import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ListaCuentasComponent } from "./lista-cuentas/lista-cuentas.component";
import { PagoComponent } from "./pago/pago.component";
import { TransferenciaComponent } from "./transferencia/transferencia.component";
import { AuthGuard } from '../auth.guard';


const routes: Routes = [
  {
    path: 'transferencia',
    component: TransferenciaComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'pago',
    component: PagoComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'clientes',
    component: ClienteComponent
  },
  {
    path: 'perfil/:id',
    component: PerfilComponent
  },
  {
    path: 'cuentas/:id',
    component: ListaCuentasComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
