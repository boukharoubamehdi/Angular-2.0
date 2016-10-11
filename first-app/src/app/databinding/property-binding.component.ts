import {Component,Input} from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `

   {{resulat}}
   
  `,
  styles: [],
  inputs:['result'] // We can use multiple names we want to use. but the best practice is to use @Input('')
})
export class PropertyBindingComponent{
   //this will make this result property  bindable from outside
  // resulat: number = 0; // we dont need the @Input() if we use the nputs:['result']  logic
  @Input()resulat: number = 0;
}
