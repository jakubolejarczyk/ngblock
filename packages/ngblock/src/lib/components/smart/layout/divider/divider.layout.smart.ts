import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DividerLayoutComponent } from '../../../dumb/layout/divider/divider.layout';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-divider-layout-smart',
  imports: [DividerLayoutComponent],
  template: `<ngb-divider-layout [orientation]="orientation()"><ng-content /></ngb-divider-layout>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DividerLayoutSmartComponent {
  readonly orientation = input<InputValue<DividerLayoutComponent['orientation']>>('horizontal');
}
