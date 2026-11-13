import {
  ChangeDetectionStrategy,
  Component,
  input,
  model,
} from '@angular/core';
import {
  PickListDataComponent,
  type PickListValue,
} from '../../../dumb/data/pick-list/pick-list.data';
import type { InputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-pick-list-data-smart',
  imports: [PickListDataComponent],
  template: `<ngb-pick-list-data
    [source]="source()"
    [target]="target()"
    (changed)="onChanged($event)"
  />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PickListDataSmartComponent {
  readonly source =
    model.required<InputValue<PickListDataComponent['source']>>();
  readonly target = model<InputValue<PickListDataComponent['target']>>([]);

  onChanged(value: PickListValue): void {
    this.source.set(value.source);
    this.target.set(value.target);
  }
}
