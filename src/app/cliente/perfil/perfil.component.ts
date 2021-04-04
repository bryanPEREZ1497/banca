import { Component, OnInit } from '@angular/core';
import { PerfilService } from "../../Services/perfil.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  datosPersonales: any[] = [];

  constructor(
    private perfilService: PerfilService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.devolverPerfilDeCliente();
  }
  devolverPerfilDeCliente() {
    const id = +!this.route.snapshot.paramMap.get('id');
    this.perfilService.devolverPerfilDeClienteId(id)
      .subscribe(datos => this.datosPersonales = datos)
  }

  volver() {
    this.router.navigate(['/clientes']);
  }

}
