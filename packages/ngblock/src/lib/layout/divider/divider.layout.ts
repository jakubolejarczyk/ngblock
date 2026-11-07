import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'ngb-divider-layout',
  templateUrl: './divider.layout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DividerLayoutComponent {
  readonly orientation = input<'horizontal' | 'vertical'>('horizontal');
}
