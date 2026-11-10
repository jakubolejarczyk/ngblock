import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ImageDataComponent } from '../../../dumb/data/image/image.data';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-image-data-smart',
  imports: [ImageDataComponent],
  template: `<ngb-image-data [src]="src()" [alt]="alt()" [caption]="caption()"><ng-content /></ngb-image-data>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageDataSmartComponent {
  readonly src = input.required<InputValue<ImageDataComponent['src']>>();
  readonly alt = input.required<InputValue<ImageDataComponent['alt']>>();
  readonly caption = input<InputValue<ImageDataComponent['caption']>>('');
}
