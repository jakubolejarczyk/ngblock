import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'ngb-flex-layout',
  templateUrl: './flex.layout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlexLayoutComponent {
  readonly direction = input<'row' | 'row-reverse' | 'column' | 'column-reverse'>('row');
  readonly wrap = input<'nowrap' | 'wrap' | 'wrap-reverse'>('wrap');
  readonly justify = input<
    'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
  >('start');
  readonly align = input<'start' | 'end' | 'center' | 'stretch' | 'baseline'>(
    'center',
  );
  readonly gap = input('1rem');
}
