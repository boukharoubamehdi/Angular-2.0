import {Injectable, EventEmitter} from "@angular/core";
import {LogService} from "./log.service";

//I injected log service into data service.

@Injectable()
export class DataService {
  pushedData = new EventEmitter<string>();
  private data: string[] = [];
  constructor(private logService: LogService){

  }

  addData(input: string){
    this.data.push(input);
    this.logService.writeToLog('Saved Item: ' + input);
  }

    getData(){
      return this.data;
    }

    //i will emit (value) to everyone listening to it.
    pushData(value: string){
      this.pushedData.emit(value);
    }
}
