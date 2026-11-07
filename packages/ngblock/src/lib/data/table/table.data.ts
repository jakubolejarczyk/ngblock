import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface DataColumn {
  readonly key: string;
  readonly header: string;
}

export type DataRow = Readonly<Record<string, string | number>>;

@Component({
  selector: 'ngb-table-data',
  templateUrl: './table.data.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableDataComponent {
  readonly caption = input('Data');
  readonly columns = input.required<readonly DataColumn[]>();
  readonly rows = input<readonly DataRow[]>([]);
}
