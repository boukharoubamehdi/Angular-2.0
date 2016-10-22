import { Injectable } from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs";


@Injectable()
export class HttpService {

//i will bind (HTTP) to a property name http i want to inject the http (from the standard Angular http /
  constructor(private http: Http) {

}
    //this is an observable.
    //map() : it's an operator that takes an observable (or the data that the observable will get back) and maps it into
    // a new observable.
    getData(){
      return this.http.get('https://angular-2-e587d.firebaseio.com/title.json')
      //takes the response, extract the body (the json the data) from the response transform it into json and then
      //it will return an observable (will use it when we use this http.service
        .map((response: Response)=> response.json())
        .catch(this.handleError);
    }

    sendData(user : any){
      //only a string can be send by the POST request, that's why i stringfy the body.
      const body = JSON.stringify(user);
      const headers = new Headers();
      // i'm sending a json Object
      headers.append('Content-Type', 'application/json');
      //headers (field) : my header.
      return this.http.post('https://angular-2-e587d.firebaseio.com/data.json', body, {
        headers: headers
      }).map((data: Response) => data.json()).catch(this.handleError);
    }

    getOwnData(){
      return this.http.get('https://angular-2-e587d.firebaseio.com/data.json')
        .map((response: Response)=> response.json());
    }

    private handleError(error : any){
      console.log(error);
       //i will return the observable, because as the map operator function return automatically the extracted
      //data  (esponse.json())
      // because the obs has to continue, no matter if an error happend or not i need to return this error.
      //so i'm able to handle it in the subscribe section as well.

      return Observable.throw(error.json()); //take the error and return it.
      //or we can transform error.json() "it will only send the error message"it depends on how we want to handle the error.

    }

}
