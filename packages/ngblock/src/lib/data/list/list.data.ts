import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'ngb-list-data',
  templateUrl: './list.data.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListDataComponent {
  readonly items = input.required<readonly string[]>();
  readonly ordered = input(false);
}
