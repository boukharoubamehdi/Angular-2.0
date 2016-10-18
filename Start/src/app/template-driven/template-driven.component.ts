import { Component } from '@angular/core';
import { NgForm } from '@angular/Forms';


@Component({
  selector: 'template-driven',
  templateUrl: 'template-driven.component.html',
  styles:[`
    input.ng-invalid  {
        border: 1px solid red;
    }    
`]
})
export class TemplateDrivenComponent {
  user={
    username:'Mehdi',
    email: 'bou@gmail.com',
    password:'test',
    gender: 'male'
  };

  genders = [
      'male',
      'female'
  ];


  onSubmit(form: NgForm) {
    console.log('It works!');
    //console.log(form);
    console.log(form.value);
    //console.log(this.user);


  }
}
