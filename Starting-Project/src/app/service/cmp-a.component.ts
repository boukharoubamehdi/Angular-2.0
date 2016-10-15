import { Component } from '@angular/core';
//example for the one Instance/Multiple service.
import { LogService } from './log.service';
import { DataService } from './data.service';

@Component({
    selector: 'si-cmp-a',
    template: `
    <div>
      <input type="text" #input>
      <button (click)="onLog(input.value)">Log</button>
      <button (click)="onStore(input.value)">Store</button>
      <button (click)="onSend(input.value)">Send</button>
    </div>
    <hr>
    <div>
        <button (click)="onGet()">Refresh Storage</button>
        <h3>Storage</h3>
        <ul>
            <li *ngFor="let item of items">{{item}}</li>
        </ul>
        <h3>Received Value</h3>
        <p>{{value}}</p>
    </div>
  `
    //providers meta-data will tell to Angular 2 which object we want to use in the body of this component.
    // used for the multiple instance example.
    // providers :[LogService,DataService]
    //example for the one Instance service.
    //providers :[LogService]
})


export class CmpAComponent {

    constructor(private logService: LogService, private dataService: DataService){

    }

    value = '';
    items: string[] = [];

    onLog(value: string) {
        this.logService.writeToLog(value);
    }

    onStore(value: string) {
        this.dataService.addData(value);

    }

    onGet() {
        this.items = this.dataService.getData();
        //if i dont want the array to be live updated i can slice it now i need to lick on refrech store to see the update.
        //this.items = this.dataService.getData().slice(0);
    }

    onSend(value: string) {
        this.dataService.pushData(value);
    }
}
