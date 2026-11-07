import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'ngb-empty-state-data',
  templateUrl: './empty-state.data.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyStateDataComponent {
  readonly title = input.required<string>();
  readonly description = input('');
}
