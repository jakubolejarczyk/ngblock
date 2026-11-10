import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DropdownMenuComponent } from '../../../dumb/menu/dropdown-menu/dropdown-menu.menu';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-dropdown-menu-smart',
  imports: [DropdownMenuComponent],
  template: `<ngb-dropdown-menu [label]="label()"><ng-content /></ngb-dropdown-menu>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownMenuSmartComponent {
  readonly label = input<InputValue<DropdownMenuComponent['label']>>('Menu');
}
