import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'ngb-grid-layout',
  templateUrl: './grid.layout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridLayoutComponent {
  readonly minItemWidth = input('16rem');
  readonly gap = input('1rem');
}
