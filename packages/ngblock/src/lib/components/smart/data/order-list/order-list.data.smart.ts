import {
  ChangeDetectionStrategy,
  Component,
  input,
  model,
} from '@angular/core';
import { OrderListDataComponent } from '../../../dumb/data/order-list/order-list.data';
import type { InputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-order-list-data-smart',
  imports: [OrderListDataComponent],
  template: `<ngb-order-list-data
    [label]="label()"
    [items]="items()"
    (changed)="items.set($event)"
  />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderListDataSmartComponent {
  readonly label =
    input<InputValue<OrderListDataComponent['label']>>('Reorder items');
  readonly items =
    model.required<InputValue<OrderListDataComponent['items']>>();
}
