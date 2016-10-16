import {CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import {Observable} from "rxjs";


export class UserDetailGuard implements CanActivate {

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean{
    //the Answer should be are you allowed to continue? should you load the component or not?
    //We return an Observable because maybe we have an asynchronous task here maybe the condition that we
    // want to check is not running synchronously

        return confirm('Are you sure?');
    }

}