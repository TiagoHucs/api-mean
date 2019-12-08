import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: Usuario = new Usuario();
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: LoginService
    ) {
  }

  ngOnInit() {
    this.montaFormulario();
  }

  login(){
    this.service.login(this.loginForm.getRawValue()).subscribe((res:Resp) =>{
      localStorage.setItem('token', res.token);
      this.router.navigate(['/home']);
    }, err => {
      console.log(err.error);
    })
    
  }

  montaFormulario(){
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

}

export class Resp{
    token: string;
}
