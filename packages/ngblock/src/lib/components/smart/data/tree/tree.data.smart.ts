import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TreeDataComponent } from '../../../dumb/data/tree/tree.data';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-tree-data-smart',
  imports: [TreeDataComponent],
  template: `<ngb-tree-data [nodes]="nodes()"><ng-content /></ngb-tree-data>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeDataSmartComponent {
  readonly nodes = input.required<InputValue<TreeDataComponent['nodes']>>();
}
