import {Component} from '@angular/core';
import {HttpService} from "./http.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'app works!';

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
    data => console.log(data)
  );
}

}
