import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home-component.component";
import { UserComponent } from "./user/user.component";


const APP_ROUTES: Routes = [
    { path: '',component: HomeComponent },
    { path: 'user', component: UserComponent }
];

export  const  Routing = RouterModule.forRoot(APP_ROUTES);