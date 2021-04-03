import { Component, OnInit } from '@angular/core';
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
    fecha: `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`
  };
  electricidad: number = 2;
  agua: number = 1;
  telefono: number = 4;
  internet: number = 3;

  constructor(
    private pagoService: PagoService
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
    this.pagoService.hacerPago(this.camposDePago)
      .subscribe(
        res => console.log(res)
      )
  }
  
}
