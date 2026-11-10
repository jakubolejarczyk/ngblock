import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AccordionMenuComponent } from '../../../dumb/menu/accordion/accordion.menu';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-accordion-menu-smart',
  imports: [AccordionMenuComponent],
  template: `<ngb-accordion-menu [items]="items()"><ng-content /></ngb-accordion-menu>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionMenuSmartComponent {
  readonly items = input.required<InputValue<AccordionMenuComponent['items']>>();
}
