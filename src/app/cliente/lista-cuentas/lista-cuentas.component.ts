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

  ngOnInit(): void {
    this.getCuentas();
  }

  getCuentas() {    
    const id = +this.route.snapshot.paramMap.get('id');
    this.clienteService.devolverCuentasDeCliente(id)
      .subscribe(datos => this.cuentas = datos)
  }

  volver() {
    this.router.navigate(['/clientes']);
  }
}
