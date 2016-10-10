import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'first-another',
  template: `
   <article>a
    <ng-content></ng-content>
   </article>
  `,
  styles: [`
      article {
        border: 1px solid black;
      }
`]
})
export class AnotherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
