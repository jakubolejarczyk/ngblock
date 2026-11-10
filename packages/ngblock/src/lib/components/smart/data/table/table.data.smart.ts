import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TableDataComponent } from '../../../dumb/data/table/table.data';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-table-data-smart',
  imports: [TableDataComponent],
  template: `<ngb-table-data [caption]="caption()" [columns]="columns()" [rows]="rows()"><ng-content /></ngb-table-data>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableDataSmartComponent {
  readonly caption = input<InputValue<TableDataComponent['caption']>>('Data');
  readonly columns = input.required<InputValue<TableDataComponent['columns']>>();
  readonly rows = input<InputValue<TableDataComponent['rows']>>([]);
}
