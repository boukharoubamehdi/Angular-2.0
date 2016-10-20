import { Component } from '@angular/core';

import { DoublePipe } from "./double.pipe";
import { FilterPipe } from "./filter.pipe";

@Component({
  moduleId: module.id,
  selector: 'pipes-app',
  templateUrl: 'pipes.component.html',
  styles: [`
    .pipes {
      margin: 32px;
      padding: 32px;
    }
  `],
  pipes: [DoublePipe, FilterPipe]
})
export class PipesAppComponent {
  myValue = 'lowercase';
  myDate = new Date(2016,5,24);
  values = ['Milk', 'Bread', 'Beans'];
  asyncValue = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data is here!'), 2000);
  });
}
