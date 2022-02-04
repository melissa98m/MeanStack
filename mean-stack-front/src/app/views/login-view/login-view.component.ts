import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import {User} from "../../models/user.model";

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  // @ts-ignore
  errorMsg:string;

  constructor(private authService:AuthService, private router:Router) {

  }

  ngOnInit(): void {

  }


  /**
   * Method called the auth form
   *
   */
  onSignIn(user: User): void {
    this.authService.login(user.toJSON()
    )
      .then(
        () => {
          this.router.navigate(['sales']);
        },
        (err) => {
          this.errorMsg = err;
        });
  }
}
