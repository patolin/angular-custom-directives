import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card';
import { ToggleDirective } from './directives/toggle.directive';
import { SiDirective } from './directives/si.directive';
@Component({

  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, ToggleDirective, SiDirective],  
  //hostDirectives: [ToggleDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
  condicion: boolean = true;
}
