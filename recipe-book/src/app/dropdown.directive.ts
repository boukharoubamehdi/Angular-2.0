import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[rbDropdown]'
})
export class DropdownDirective {

  // opened() is the property of rbDropdown.
  // [rbDropdown] ='opened' if return this.isOpen is true.
  // class.open (open is a normal bootstrap css class, bootstrap is ships with).
  //i'm specifying when this styling should be apply (i'm spying).
  @HostBinding('class.open') get opened(){
    return this.isOpen;
};

  @HostListener('click') open(){
    return this.isOpen = true;
}

  @HostListener('mouseleave') close(){
    return this.isOpen = false;
  }
private isOpen = false;
}
