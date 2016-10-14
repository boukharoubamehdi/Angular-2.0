import {Injectable} from "@angular/core";
import {LogService} from "./log.service";

//I injected log service into data service.

@Injectable()
export class DataService {
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
}
