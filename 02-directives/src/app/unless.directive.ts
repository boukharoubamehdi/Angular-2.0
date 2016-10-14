import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[dirUnless]'
})
export class UnlessDirective {

  //it's a boolean because swtich is passed in this condition
  @Input() set dirUnless (condition: boolean){
      if(!condition){
        //passing the template to the container (cvRef)
        //it will take the position (this "container" viewContainer reference and render the containt of this tamplate
        // in this place (the container).
        this.cvRef.createEmbeddedView(this.templateRef);
      }else{
        this.cvRef.clear();
      }
  }


  //templateRef : what we want to change
  //ViewCOntainerRef: the container holding our tamplate (where the change had been made).
  constructor(private templateRef: TemplateRef<any>, private cvRef: ViewContainerRef) { }

}
