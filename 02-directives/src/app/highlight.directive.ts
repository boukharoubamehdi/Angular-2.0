import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer) {
    //bad practice (this will work on my browser but i dont think it ill work somewhere else.
    //this.elementRef.nativeElement.style.backgroundColor = 'green';

    //good practice
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green');
  }

}
