import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  ViewChild,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
   <ng-content></ng-content>
   <hr>
   <!--I'm binding the Paragraph to a reference (#boundParagraph)-->
   <p #boundParagraph>{{bindable}}</p>
   
   <!--I access the text of the Paragraph through the bound varible (boundParagraph). 
   this is how i can use local variables in my templates.-->
   <p>{{boundParagraph.textContent}}</p>
   
  `,
  styles: []
})
export class LifecycleComponent implements OnInit, OnChanges,
  DoCheck,AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,OnDestroy{

    @Input() bindable  = 1000;
    // to access to the boundParagraph here i need a @ViewChild because it's a local variable of the template.
    // ('X') have to match with #X of the template.
    @ViewChild('boundParagraph') boundParagraph : HTMLElement;

    @ContentChild('boundContent') boundContent : HTMLElement;


  constructor() {
  }

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngOnChanges(){
    this.log('ngOnchanges');
  }

  ngDoCheck(){
    this.log('DoCheck');
  }

  ngAfterContentInit(){
    this.log('AfterContentInit');
    console.log(this.boundContent);
  }

  ngAfterContentChecked(){
    this.log('AfterContentChecked');
  }


  ngAfterViewInit(){
    this.log('AfterViewInit');
    console.log(this.boundParagraph);
  }

  ngAfterViewChecked(){
    this.log('AfterViewChecked');
  }

  ngOnDestroy(){
    this.log('OnDestroy');
  }

  //this Method will log the current hook into the console.
  private log(hook: string){
    console.log(hook);
  }

}
