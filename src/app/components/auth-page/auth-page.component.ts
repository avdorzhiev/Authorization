import { Component, EventEmitter, Injectable, OnInit, Output } from '@angular/core';

export const AUTH_TOKEN_KEY = 'ATK';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})


export class AuthPageComponent {

  // @Output() valueLogin: EventEmitter<string> =  new EventEmitter<string>()

  name = '';
  password = '';

  constructor() { }

  login() {
    if (this.name.trim() && this.password.trim()) {
      if(sessionStorage.getItem(this.name) == this.password){
        sessionStorage.setItem(AUTH_TOKEN_KEY, this.name)
        document.location.href = "./main"
      }
      else alert('Пользователь не найден')
    }
    else alert('Введите логин и пароль');
  }

}
