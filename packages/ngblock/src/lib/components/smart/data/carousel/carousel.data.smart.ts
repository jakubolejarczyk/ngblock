import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CarouselDataComponent } from '../../../dumb/data/carousel/carousel.data';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-carousel-data-smart',
  imports: [CarouselDataComponent],
  template: `<ngb-carousel-data [slides]="slides()"><ng-content /></ngb-carousel-data>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselDataSmartComponent {
  readonly slides = input.required<InputValue<CarouselDataComponent['slides']>>();
}
