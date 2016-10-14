import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { ServiceComponent } from "./service/service.component";
import { CmpAComponent } from "./service/cmp-a.component";
import { CmpBComponent } from "./service/cmp-b.component";

@NgModule({
    declarations: [
        AppComponent,
        ServiceComponent,
        CmpAComponent,
        CmpBComponent
    ],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}