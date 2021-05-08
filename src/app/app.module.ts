import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClienteModule } from './cliente/cliente.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransferenciaComponent } from './Components/transferencia/transferencia.component';
import { CuentaComponent } from './Components/cuenta/cuenta.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagoComponent } from './Components/pago/pago.component';
import { PageNotFoundComponent } from "./Components/page-not-found/page-not-found.component";

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SigninComponent } from './signin/signin.component';




@NgModule({
  declarations: [
    AppComponent,
    TransferenciaComponent,
    CuentaComponent,
    PagoComponent,
    PageNotFoundComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ClienteModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
