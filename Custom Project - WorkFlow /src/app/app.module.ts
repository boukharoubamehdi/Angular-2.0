import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from "./app.component";
import { OtherComponent } from "./other/other.component";

@NgModule({
    declarations: [AppComponent, OtherComponent, AlertComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}