import { Component, OnInit } from '@angular/core';
import { CuentaService } from "../../Services/cuenta.service";
@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent implements OnInit {
  cuentas: any[] = [];

  constructor(private cuentaService: CuentaService) { }

  ngOnInit(): void {
    this.devolverCuentas();
  }
  devolverCuentas() {
    this.cuentaService.devolverCuentas()
      .subscribe(
        cuentas => this.cuentas = cuentas
      );
  }


}
