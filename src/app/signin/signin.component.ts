import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service'
import { Router } from '@angular/router'
import { PerfilService } from '../Services/perfil.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user = {
    email: '',
    password: ''
  }
  id: any;

  constructor(
    private authService: AuthService,
    private perfilService: PerfilService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signIn() {
    this.foundIdByEmail(this.user.email);
    this.authService.signIn(this.user)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token);
          localStorage.setItem('id', this.id[0].cliente);
          this.router.navigate([`/perfil/${this.id[0].cliente}`]);
        },
        err => console.log(err)
      )
  }
  foundIdByEmail(email: string) {
    this.perfilService.foundIdByEmail(email)
      .subscribe(res => this.id = res);
  }

}