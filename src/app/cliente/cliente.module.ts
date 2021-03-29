import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import {ClienteComponent} from './cliente/cliente.component';
import {PerfilComponent} from './perfil/perfil.component';
import { ListaCuentasComponent } from './lista-cuentas/lista-cuentas.component';

@NgModule({
  declarations: [
    ClienteComponent,
    PerfilComponent,
    ListaCuentasComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
