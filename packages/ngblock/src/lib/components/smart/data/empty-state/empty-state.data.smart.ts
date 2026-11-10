import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { EmptyStateDataComponent } from '../../../dumb/data/empty-state/empty-state.data';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-empty-state-data-smart',
  imports: [EmptyStateDataComponent],
  template: `<ngb-empty-state-data [title]="title()" [description]="description()"><ng-content /></ngb-empty-state-data>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyStateDataSmartComponent {
  readonly title = input.required<InputValue<EmptyStateDataComponent['title']>>();
  readonly description = input<InputValue<EmptyStateDataComponent['description']>>('');
}
