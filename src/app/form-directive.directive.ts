import { AfterContentInit, Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFormDirective]'
})
export class FormDirectiveDirective{
@HostListener('submit',['$event']) onClick(e:any){
  console.log(e.preventDefault());
}
  constructor(
  ) {
  }

}
