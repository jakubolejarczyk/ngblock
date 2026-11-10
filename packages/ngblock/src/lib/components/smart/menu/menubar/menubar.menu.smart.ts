import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MenubarMenuComponent } from '../../../dumb/menu/menubar/menubar.menu';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-menubar-menu-smart',
  imports: [MenubarMenuComponent],
  template: `<ngb-menubar-menu [items]="items()"><ng-content /></ngb-menubar-menu>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenubarMenuSmartComponent {
  readonly items = input.required<InputValue<MenubarMenuComponent['items']>>();
}
