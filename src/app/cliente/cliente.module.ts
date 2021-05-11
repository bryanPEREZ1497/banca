import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente/cliente.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ListaCuentasComponent } from './lista-cuentas/lista-cuentas.component';
import { NavbarComponent } from "./navbar/navbar.component";

// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatInput, MatInputModule } from '@angular/material/input';
// import { MatSelectModule } from '@angular/material/select';
// import { MatButtonModule } from '@angular/material/button';
// import { MatTableModule } from '@angular/material/table';
// import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    ClienteComponent,
    PerfilComponent,
    ListaCuentasComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule
    // MatFormFieldModule,
    // MatToolbarModule,
    // MatInputModule,MatInput,
    // MatSelectModule,
    // MatButtonModule,
    // MatTableModule,
    // MatSnackBarModule
  ]
})
export class ClienteModule { }
