import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'ngb-image-data',
  templateUrl: './image.data.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageDataComponent {
  readonly src = input.required<string>();
  readonly alt = input.required<string>();
  readonly caption = input('');
}
