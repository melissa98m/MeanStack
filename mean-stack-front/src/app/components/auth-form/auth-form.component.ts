import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {

  // @ts-ignore
  @Input() label: string;
  // @ts-ignore
  @Output() onFormSubmitted: EventEmitter<any>;
  // @ts-ignore
  authForm:FormGroup;
  // @ts-ignore
  user:User;

  constructor(private formBuilder: FormBuilder) {
    this.onFormSubmitted = new EventEmitter<any>();
    // @ts-ignore
    this.user = new User(undefined, undefined);
  }

  ngOnInit(): void {
    this.initForm();
  }

  /**
   * Method for initialize all controls for the auth form
   *
   */
  initForm(): void {
    this.authForm = this.formBuilder.group({
      email:['' , [Validators.required, Validators.email]] ,
      password:['' , Validators.required]
    });
  }

  /**
   * Methos called wheb the submit the form
   */
  onSubmit():void{
    this.onFormSubmitted.emit(this.user);
  }
}
