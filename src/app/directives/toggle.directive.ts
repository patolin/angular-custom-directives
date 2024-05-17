// attribute directive personalizada
import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggle]',
  standalone: true,
})
export class ToggleDirective {

  constructor(private el: ElementRef) {
  }

  @HostBinding('class.borde') appToggle: boolean = false;

  @HostListener('click') onClick() {
    this.appToggle = !this.appToggle;
  }

}
