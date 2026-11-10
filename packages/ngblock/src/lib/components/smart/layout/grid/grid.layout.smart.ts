import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GridLayoutComponent } from '../../../dumb/layout/grid/grid.layout';
import type { InputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-grid-layout-smart',
  imports: [GridLayoutComponent],
  template: `<ngb-grid-layout [minItemWidth]="minItemWidth()" [gap]="gap()"><ng-content /></ngb-grid-layout>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridLayoutSmartComponent {
  readonly minItemWidth =
    input<InputValue<GridLayoutComponent['minItemWidth']>>('16rem');
  readonly gap = input<InputValue<GridLayoutComponent['gap']>>('1rem');
}
