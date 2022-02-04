import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalesViewComponent } from './views/sales-view/sales-view.component';
import {SaleService} from "./services/sale/sale.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import { SaleCreatorViewComponent } from './views/sale-creator-view/sale-creator-view.component';
import {ReactiveFormsModule} from "@angular/forms";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SaleEditorViewComponent } from './views/sale-editor-view/sale-editor-view.component';
import { SaleViewComponent } from './views/sale-view/sale-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import {AuthService} from "./services/auth/auth.service";
import { RegisterViewComponent } from './views/register-view/register-view.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SalesViewComponent,
    SaleCreatorViewComponent,
    SaleEditorViewComponent,
    SaleViewComponent,
    LoginViewComponent,
    RegisterViewComponent,
    AuthFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [SaleService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
