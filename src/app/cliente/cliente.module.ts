import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente/cliente.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ListaCuentasComponent } from './lista-cuentas/lista-cuentas.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { PagoComponent } from "./pago/pago.component";
import { TransferenciaComponent } from "./transferencia/transferencia.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from "../auth.guard";
import { TokenInterceptorService } from "../Services/token-interceptor.service";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    NavbarComponent,
    PagoComponent,
    TransferenciaComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ClienteRoutingModule,
    FormsModule,
    BrowserAnimationsModule
    // MatFormFieldModule,
    // MatToolbarModule,
    // MatInputModule,MatInput,
    // MatSelectModule,
    // MatButtonModule,
    // MatTableModule,
    // MatSnackBarModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [ClienteModule]
})
export class ClienteModule { }
