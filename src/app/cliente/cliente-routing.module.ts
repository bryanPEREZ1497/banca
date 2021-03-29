import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ListaCuentasComponent } from "./lista-cuentas/lista-cuentas.component";
const routes: Routes = [
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
