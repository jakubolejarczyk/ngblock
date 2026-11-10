import { ChangeDetectionStrategy, Component, input, linkedSignal, output } from '@angular/core';
import { PaginatorDataComponent } from '../../../dumb/data/paginator/paginator.data';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-paginator-data-smart',
  imports: [PaginatorDataComponent],
  template: `<ngb-paginator-data [total]="total()" [pageSize]="pageSize()" [page]="currentPage()" (pageChange)="onPageChange($event)"><ng-content /></ngb-paginator-data>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorDataSmartComponent {
  readonly total = input.required<InputValue<PaginatorDataComponent['total']>>();
  readonly pageSize = input<InputValue<PaginatorDataComponent['pageSize']>>(10);
  readonly page = input<InputValue<PaginatorDataComponent['page']>>(0);
  readonly currentPage = linkedSignal(() => this.page());
  readonly pageChange = output<OutputValue<PaginatorDataComponent['pageChange']>>();

  onPageChange(value: OutputValue<PaginatorDataComponent['pageChange']>): void {
    this.currentPage.set(value);
    this.pageChange.emit(value);
  }
}
