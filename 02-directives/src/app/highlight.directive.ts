//import {Directive, ElementRef, Renderer, HostListener} from '@angular/core';
import {Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {

  // //used for the creating custom attribute example.
  // constructor(private elementRef: ElementRef, private renderer: Renderer) {
  //   //bad practice (this will work on my browser but i dont think it ill work somewhere else.
  //   //this.elementRef.nativeElement.style.backgroundColor = 'green';
  //
  //   //good practice
  //   this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green');
  // }

  //HostListener() this metaData allows me to define a rend on the hosting element (the element hosting this directive)
  //which will trigger a method HostListener('method').

  @HostListener('mouseenter') mouseover(){
      this.backgroundColor = 'green';
    //we can also use the this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green') logic
  };

  @HostListener('mouseleave') mouseleave(){
    this.backgroundColor = 'White';
  };

  //we are changing the color (with @HostListener('mouseenter') mouseover() ) (we wont see the change
  // but we are not styling it anywhere to do so, we'll use @HostBinding()
  // this will set the Color of style.backgroundColor  = the color white or green it depends
  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;

  };

  private  backgroundColor = 'White';
  constructor(){

  }

}
