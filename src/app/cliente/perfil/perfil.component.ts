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
  id: any;
  constructor(
    private perfilService: PerfilService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {
    // this.devolverPerfilDeCliente();
    this.getPerfil();
  }
  devolverPerfilDeCliente() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.perfilService.devolverPerfilDeClienteId(this.id)
      .subscribe(datos => {
        this.datosPersonales = datos
        console.log('stoy en perfil', this.id);

      })
  }
  getPerfil() {
    this.id = localStorage.getItem('id');
    this.perfilService.devolverPerfilDeClienteId(this.id)
      .subscribe(datos => {
        this.datosPersonales = datos
        console.log('stoy en perfil', this.id);
      })
  }

  volver() {
    this.router.navigate(['/clientes']);
  }

}
