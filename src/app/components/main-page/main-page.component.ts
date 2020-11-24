import { AUTH_TOKEN_KEY } from './../auth-page/auth-page.component';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private titleService: Title) { }

  login = sessionStorage.getItem(AUTH_TOKEN_KEY)

  ngOnInit(): void {
    this.titleService.setTitle(this.login)
  }

  logout(){
    document.location.href = "./";
  }

}
