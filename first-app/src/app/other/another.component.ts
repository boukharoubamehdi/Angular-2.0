import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'first-another',
  template: `
    <p>
      another Works!
    </p>
  `,
  styles: [`
      p{
          color: blue;
      }
`]
})
export class AnotherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
