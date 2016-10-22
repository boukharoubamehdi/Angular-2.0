import {Component} from '@angular/core';
import {HttpService} from "./http.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  items : any[] = [];
  //i dont need to subscribe here because the async pipe will do it for me.
  //it allows me to dynamically load the content.
  asyncString = this.httpService.getData();


  constructor(private httpService: HttpService){

  }

  //used for the Get example
  // ngOnInit(){
  //   this.httpService.getData().subscribe(
  //     (data :any) => console.log(data)
  //   );
  // }

onSubmit(username:string, email: string){
  this.httpService.sendData({username: username, email: email}).subscribe(
    data => console.log(data),
    error => console.log(error)
  );
}

  onGetData(){
    this.httpService.getOwnData().subscribe(
      //i will receive an object , i need to transform it to an array (i need to loop into my items).
      data => {
        const myArray= [];

        for(let key in data){ // in my case each key is (email and username and in each of these two keys i have objects)
          myArray.push(data[key]);
        }
        this.items = myArray;
      }
    );
  }

}
