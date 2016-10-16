import { Component } from '@angular/core';
import { NgForm } from '@angular/Forms';


@Component({
  selector: 'template-driven',
  templateUrl: 'template-driven.component.html'
})
export class TemplateDrivenComponent {

  onSubmit(form: NgForm) {
    console.log('It works!');
    console.log(form);

  }
}
