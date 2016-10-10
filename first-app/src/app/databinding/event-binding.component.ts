import { Component} from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <button (click)="onclicked()">Click me!</button>
  `,
  styles: []
})
export class EventBindingComponent {
  onclicked(){
    alert("It worked!")
  }

}
