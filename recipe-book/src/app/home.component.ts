import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rb-home',
  template: `
    <h1>
      Welcome to Mehdi's Recipe Book!
    </h1>
    <img class="img-responsive" style="max-height: 500px" src="http://indiereader.com/wp-content/uploads/2015/04/mad-men.jpg">
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
