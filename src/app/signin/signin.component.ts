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

  constructor(
    private authService: AuthService,
    private perfilService: PerfilService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signIn() {
    this.authService.signIn(this.user)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          const id = this.foundIdByEmail(this.user.email);
            console.log(id);
          this.router.navigate([`/perfil/${id}`]);
        },
        err => console.log(err)
      )
  }
  foundIdByEmail(email: string) {
    return this.perfilService.foundIdByEmail(email)
      .subscribe()
  }

}