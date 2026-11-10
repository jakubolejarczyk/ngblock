import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'ngb-paginator-data',
  templateUrl: './paginator.data.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorDataComponent {
  readonly total = input.required<number>();
  readonly pageSize = input(10);
  readonly page = input(0);
  readonly pageChange = output<number>();
  readonly pageCount = computed(() =>
    Math.ceil(this.total() / this.pageSize()),
  );

  goTo(page: number): void {
    if (page >= 0 && page < this.pageCount()) this.pageChange.emit(page);
  }
}
