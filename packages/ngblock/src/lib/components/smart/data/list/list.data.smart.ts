import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ListDataComponent } from '../../../dumb/data/list/list.data';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-list-data-smart',
  imports: [ListDataComponent],
  template: `<ngb-list-data [items]="items()" [ordered]="ordered()"><ng-content /></ngb-list-data>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListDataSmartComponent {
  readonly items = input.required<InputValue<ListDataComponent['items']>>();
  readonly ordered = input<InputValue<ListDataComponent['ordered']>>(false);
}
