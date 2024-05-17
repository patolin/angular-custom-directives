// structural directive personalizada
import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appSi]",
  standalone: true,
})
export class SiDirective {
  private muestra = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set appSi(condicion: boolean) {
    if (condicion && !this.muestra) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.muestra = true;
    } else if (!condicion && this.muestra) {
      this.viewContainer.clear();
      this.muestra = false;
    }
  }
}