import { Component, OnInit } from '@angular/core';
import { TransferenciaService } from "../../Services/transferencia.service";
@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {

  camposDeTransferencia = {
    // benefactor,
    // beneficiario,
    // monto,
    // motivo,
    fecha: `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`
  };

  constructor(private transferenciaService: TransferenciaService) { }

  ngOnInit(): void {

  }


  hacerTransferencia() {
    this.transferenciaService.hacerTransferencia(this.camposDeTransferencia)
      .subscribe(
        res => console.log(res),
        e => console.log(e)
      )
  }


}
