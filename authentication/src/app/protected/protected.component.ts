import { Component } from '@angular/core';

@Component({
  selector: 'aut-protected',
  template: `
           <h1>Protected - you shouldn't be here if not signed in</h1>
  `,
  styles: []
})
export class ProtectedComponent {

  constructor() { }

  ngOnInit() {
  }

}
