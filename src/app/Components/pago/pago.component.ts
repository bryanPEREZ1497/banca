import { Component, OnInit } from '@angular/core';
import { PagoService } from '../../Services/pago.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {
  servicioSeleccionado: any;
  pagos: any[] = [];

  camposDePago = {
    fecha: `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`
  };
  electricidad: number = 2;
  agua: number = 1;
  telefono: number = 4;
  internet: number = 3;

  constructor(
    private pagoService: PagoService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }
  devolverPagos() {
    this.pagoService.devolverPagos()
      .subscribe(
        pagos => this.pagos = pagos
      )
  }
  hacerPago() {
    console.log(this.camposDePago);
    this.pagoService.hacerPago(this.camposDePago)
      .subscribe(
        res => console.log(res)
      )
  }
  durationInSeconds = 5;
  openSnackBar() {
    this._snackBar.openFromComponent(PageNotFoundComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}
