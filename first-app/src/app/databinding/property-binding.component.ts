import {Component,Input} from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `

   {{resulat}}
   
  `,
  styles: []
})
export class PropertyBindingComponent{
   //this will make this result property  bindable from outside
  @Input() resulat: number = 0;
}
