import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Auth';

  ngOnInit(){
    sessionStorage.setItem("admin", "admin");
    sessionStorage.setItem("vlados", "qwerty");
    sessionStorage.setItem("user", "1234");
  }
  


}
