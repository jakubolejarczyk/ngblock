import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'ngb-scroll-area-layout',
  templateUrl: './scroll-area.layout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollAreaLayoutComponent {
  readonly label = input('Scrollable content');
  readonly maxHeight = input('20rem');
}
