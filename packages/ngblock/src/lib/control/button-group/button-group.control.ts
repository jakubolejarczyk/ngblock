import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'ngb-button-group-control',
  templateUrl: './button-group.control.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonGroupComponent {
  readonly label = input('Actions');
}
