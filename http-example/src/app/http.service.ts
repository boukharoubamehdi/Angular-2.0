import { Injectable } from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
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

    sendData(user : any){
      //only a string can be send by the POST request, that's why i stringfy the body.
      const body = JSON.stringify(user);
      const headers = new Headers();
      // i'm sending a json Object
      headers.append('Content-Type', 'application/json');
      //headers (field) : my header.
      return this.http.post('https://angular-2-e587d.firebaseio.com/data.json', body, {
        headers: headers
      }).map((data: Response) => data.json());
    }

    getOwnData(){
      return this.http.get('https://angular-2-e587d.firebaseio.com/data.json')
        .map((response: Response)=> response.json());
    }

}
