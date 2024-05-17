// Suggested code may be subject to a license. Learn more: ~LicenseLog:4277133670.
import { Component } from '@angular/core';
import { ToggleDirective } from '../directives/toggle.directive';
@Component({
  selector: 'app-card',
  standalone: true,
  //hostDirectives: [ToggleDirective],
  //imports: [ToggleDirective],
  template: `
    <div class="card">
      <div class="card-body">
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class CardComponent {
}
