import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

export interface PickListValue {
  readonly source: readonly string[];
  readonly target: readonly string[];
}

@Component({
  selector: 'ngb-pick-list-data',
  templateUrl: './pick-list.data.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PickListDataComponent {
  readonly source = input.required<readonly string[]>();
  readonly target = input<readonly string[]>([]);
  readonly changed = output<PickListValue>();

  move(item: string, from: 'source' | 'target'): void {
    const source = [...this.source()];
    const target = [...this.target()];
    const origin = from === 'source' ? source : target;
    const destination = from === 'source' ? target : source;
    const index = origin.indexOf(item);
    if (index < 0) return;
    origin.splice(index, 1);
    destination.push(item);
    this.changed.emit({ source, target });
  }
}
