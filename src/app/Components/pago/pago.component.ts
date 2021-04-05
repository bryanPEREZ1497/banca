import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PagoService } from '../../Services/pago.service';
@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {
  servicioSeleccionado: any;
  pagos: any[] = [];

  camposDePago = {
    cuenta_a_debitar: '',
    monto: 0,
    servicio: 0,
    fecha: `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`
  };
  electricidad: number = 2;
  agua: number = 1;
  telefono: number = 4;
  internet: number = 3;

  constructor(
    private pagoService: PagoService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }
  devolverPagos() {
    this.pagoService.devolverPagos()
      .subscribe(
        pagos => this.pagos = pagos
      )
  }
  hacerPago(mensaje: string, action: string): void {
    this.pagoService.hacerPago(this.camposDePago)
      .subscribe(
        res => {
          if (res.hecho) {
            this.snackbar.open('¡Pago realizado!', action, { duration: 2000 })
            return;
          }
          this.snackbar.open('¡El pago falló!', action, { duration: 2000 })
        }
      )
  }

}
