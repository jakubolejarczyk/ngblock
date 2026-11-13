import {
  ChangeDetectionStrategy,
  Component,
  input,
  model,
} from '@angular/core';
import { DataViewDataComponent } from '../../../dumb/data/data-view/data-view.data';
import type { InputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-data-view-smart',
  imports: [DataViewDataComponent],
  template: `<ngb-data-view
    [items]="items()"
    [view]="view()"
    (viewChange)="view.set($event)"
  />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataViewDataSmartComponent {
  readonly items = input.required<InputValue<DataViewDataComponent['items']>>();
  readonly view = model<InputValue<DataViewDataComponent['view']>>('list');
}
