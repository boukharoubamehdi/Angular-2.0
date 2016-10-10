import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <button (click)="onclicked()">Click me!</button>
  `,
  styles: []
})
export class EventBindingComponent {

  // I'm using @Output() in order to make the custom event clicked listenable outside of this component (event-binding-comp)
 @Output() clicked = new EventEmitter<string>(); // i created an event object.

  onclicked(){
    //alert("It worked!") // used this for the Event Binding example
    this.clicked.emit("It Worked!")
  }

}
