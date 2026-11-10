import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BreadcrumbMenuComponent } from '../../../dumb/menu/breadcrumb/breadcrumb.menu';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-breadcrumb-menu-smart',
  imports: [BreadcrumbMenuComponent],
  template: `<ngb-breadcrumb-menu [items]="items()"><ng-content /></ngb-breadcrumb-menu>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbMenuSmartComponent {
  readonly items = input.required<InputValue<BreadcrumbMenuComponent['items']>>();
}
