import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'ngb-order-list-data',
  templateUrl: './order-list.data.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderListDataComponent {
  readonly label = input('Reorder items');
  readonly items = input.required<readonly string[]>();
  readonly changed = output<readonly string[]>();

  move(index: number, offset: -1 | 1): void {
    const destination = index + offset;
    const items = [...this.items()];
    if (destination < 0 || destination >= items.length) return;
    [items[index], items[destination]] = [items[destination], items[index]];
    this.changed.emit(items);
  }
}
