import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TimelineDataComponent } from '../../../dumb/data/timeline/timeline.data';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-timeline-data-smart',
  imports: [TimelineDataComponent],
  template: `<ngb-timeline-data [events]="events()"><ng-content /></ngb-timeline-data>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineDataSmartComponent {
  readonly events = input.required<InputValue<TimelineDataComponent['events']>>();
}
