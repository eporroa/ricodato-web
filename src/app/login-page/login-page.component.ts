import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuthService } from "../providers/angular-fire-auth.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(
    public afService: AngularFireAuthService,
    private router: Router
  ) {}

  ngOnInit() {
  }

  login() {
    this.afService.loginWithGoogle().then((data) => {
      this.router.navigate(['']);
    })
  }

}
