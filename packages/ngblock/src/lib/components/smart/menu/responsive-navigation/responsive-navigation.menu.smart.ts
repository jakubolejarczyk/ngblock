import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ResponsiveNavigationMenuComponent } from '../../../dumb/menu/responsive-navigation/responsive-navigation.menu';
import type { InputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-responsive-navigation-menu-smart',
  imports: [ResponsiveNavigationMenuComponent],
  template: `<ngb-responsive-navigation-menu [label]="label()" [menuLabel]="menuLabel()" [items]="items()" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResponsiveNavigationMenuSmartComponent {
  readonly label =
    input<InputValue<ResponsiveNavigationMenuComponent['label']>>(
      'Main navigation',
    );
  readonly menuLabel =
    input<InputValue<ResponsiveNavigationMenuComponent['menuLabel']>>('Menu');
  readonly items =
    input.required<InputValue<ResponsiveNavigationMenuComponent['items']>>();
}
