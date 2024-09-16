import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirective1]'
})
export class Directive1Directive {

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.textTransform = 'uppercase'
//    this.element.nativeElement.style.backgrioundColor = 'black'
  this.element.nativeElement.style.color = 'Red'
  this.element.nativeElement.style.textShadow = '2px 2px 4px #000000' 
  }

}
