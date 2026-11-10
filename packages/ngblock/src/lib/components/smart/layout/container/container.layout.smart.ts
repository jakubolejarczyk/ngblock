import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ContainerLayoutComponent } from '../../../dumb/layout/container/container.layout';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-container-layout-smart',
  imports: [ContainerLayoutComponent],
  template: `<ngb-container-layout [size]="size()"><ng-content /></ngb-container-layout>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainerLayoutSmartComponent {
  readonly size = input<InputValue<ContainerLayoutComponent['size']>>('large');
}
