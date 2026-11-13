import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ScrollAreaLayoutComponent } from '../../../dumb/layout/scroll-area/scroll-area.layout';
import type { InputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-scroll-area-layout-smart',
  imports: [ScrollAreaLayoutComponent],
  template: `<ngb-scroll-area-layout [label]="label()" [maxHeight]="maxHeight()"
    ><ng-content
  /></ngb-scroll-area-layout>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollAreaLayoutSmartComponent {
  readonly label =
    input<InputValue<ScrollAreaLayoutComponent['label']>>('Scrollable content');
  readonly maxHeight =
    input<InputValue<ScrollAreaLayoutComponent['maxHeight']>>('20rem');
}
