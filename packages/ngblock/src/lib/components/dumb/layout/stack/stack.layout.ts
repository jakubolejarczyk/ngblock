import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'ngb-stack-layout',
  templateUrl: './stack.layout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StackLayoutComponent {
  readonly direction = input<'horizontal' | 'vertical'>('vertical');
  readonly gap = input('1rem');
}
