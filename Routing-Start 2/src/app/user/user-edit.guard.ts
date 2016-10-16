import {CanDeactivate} from "@angular/router";
import {Observable} from "rxjs";

//this interface is like a contract a component has to sign if it implements it which tells the component
//tou have to have a method which is called canDeactivate this method takes no arguments but return a boolean or an obs
export interface ComponentCanDeactivate{
    canDeactivate: () => boolean | Observable<boolean>;

}

export class UserEditGuard implements CanDeactivate<ComponentCanDeactivate>{

    //this component will need to implement a specific interface because in the component i will again create my
    //CanDeactivate method which will get executed.
    canDeactivate(component: ComponentCanDeactivate):Observable<boolean> | boolean{

        //if we have a component which for some reason doesn't have the canDeactivate() even though it should we will return
        //true by default, which means yes go ahead navigate away but if it does have the canDeactivate()
        //component.canDeactivate : we are checking if the component have the canDeactivate method then we do call it
        // with component.canDeactivate()
        //The reason is we need to call the method in the component to make sure we have access to the code in the component.
        return component.canDeactivate ? component.canDeactivate() : true;

    }

}