import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service'
import { Router } from '@angular/router'
import { PerfilService } from '../Services/perfil.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = {
    email: '',
    password: ''
  };
  id: any;
  constructor(
    private authService: AuthService,
    private router: Router,
    private perfilService: PerfilService
  ) { }

  ngOnInit() {
  }

  signUp() {
    this.foundIdByEmail(this.user.email);
    this.authService.signUp(this.user)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          localStorage.setItem('id', this.id[0].cliente);
          this.router.navigate([`/perfil/${this.id[0].cliente}`]);
        },
        err => console.log('Hay un error', err)

      )
    console.log(this.user)
  }
  foundIdByEmail(email: string) {
    this.perfilService.foundIdByEmail(email)
      .subscribe(res => this.id = res);
  }

}
