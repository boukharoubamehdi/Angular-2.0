import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProtectedComponent } from './protected/protected.component';
import { SigninComponent } from './unprotected/signin.component';
import { SignupComponent } from './unprotected/signup.component';
import { HeaderComponent } from './shared/header.component';
import { routing } from './app.routes';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent,
    ProtectedComponent,



  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
