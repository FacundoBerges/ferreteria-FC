import { Component, Input } from '@angular/core';

@Component({
  selector: 'fc-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input()
  public buttonText: string = 'Click me!';
}
