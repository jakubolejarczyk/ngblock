import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

export interface DataViewItem {
  readonly id: string;
  readonly title: string;
  readonly description?: string;
}

@Component({
  selector: 'ngb-data-view',
  templateUrl: './data-view.data.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataViewDataComponent {
  readonly items = input.required<readonly DataViewItem[]>();
  readonly view = input<'list' | 'grid'>('list');
  readonly viewChange = output<'list' | 'grid'>();
}
