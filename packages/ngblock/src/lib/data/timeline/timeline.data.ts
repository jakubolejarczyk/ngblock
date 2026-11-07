import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface TimelineEvent {
  readonly title: string;
  readonly description?: string;
  readonly date?: string;
}

@Component({
  selector: 'ngb-timeline-data',
  templateUrl: './timeline.data.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineDataComponent {
  readonly events = input.required<readonly TimelineEvent[]>();
}
