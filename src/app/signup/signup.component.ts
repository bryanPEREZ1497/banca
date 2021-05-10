import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
user = {email:'',
    password:''
};
  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  signUp() {
    this.authService.signUp(this.user)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/cuentas']);
        },
        err => console.log('Hay un error',err)
      
      )
    console.log(this.user) 
  }

}