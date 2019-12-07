import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';

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
    private service: LoginService
    ) {
  }

  ngOnInit() {
    this.montaFormulario();
  }

  login(){
    console.log('vou logar')
    this.service.login(this.loginForm.getRawValue()).subscribe(()=>{
      console.log('sucesso')
    }, err => {
      console.log('deu erro')
    })
    
  }

  montaFormulario(){
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

}
