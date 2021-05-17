import { Component, OnInit } from '@angular/core';
import { ClienteService } from "../../Services/cliente.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-lista-cuentas',
  templateUrl: './lista-cuentas.component.html',
  styleUrls: ['./lista-cuentas.component.css']
})
export class ListaCuentasComponent implements OnInit {
  cuentas: any[] = [];
  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  id: any;
  ngOnInit(): void {
    this.getCuentas();
  }

  // getCuentas() {
  //   this.id = this.route.snapshot.paramMap.get('id');
  // this.clienteService.devolverCuentasDeCliente(this.id)
  // .subscribe(datos => this.cuentas = datos)
  // }
  getCuentas() {
    this.id = localStorage.getItem('id');
    this.clienteService.devolverCuentasDeCliente(this.id)
      .subscribe(datos => this.cuentas = datos)
  }

  volver() {
    this.router.navigate(['/clientes']);
  }
}
