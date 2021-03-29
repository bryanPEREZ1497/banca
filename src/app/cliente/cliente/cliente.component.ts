import { Component, OnInit } from '@angular/core';
import { ClienteService } from "../../Services/cliente.service";
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clientes: any[] = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.devolverClientes();
  }

  devolverClientes() {
    this.clienteService.devolverClientes()
      .subscribe(clientes => this.clientes = clientes);
  }
}
