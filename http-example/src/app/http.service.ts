import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';


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
        .map((response: Response)=> response.json());
    }

}
