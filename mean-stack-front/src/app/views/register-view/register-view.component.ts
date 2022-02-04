import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {User} from "../../models/user.model";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.css']
})
export class RegisterViewComponent implements OnInit {

  // @ts-ignore
  errorMsg:string

  constructor(private authService: AuthService ,private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * Method called the user submit auth form
   *
   */
  onSignUp(user: User): void {
    this.authService.register(user.toJSON()
    )
      .then(
        () => {
          this.router.navigate(['login']);
        },
        (err) => {
          this.errorMsg = err;
        });
  }
}
