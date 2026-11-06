import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'ngb-icon',
  templateUrl: './icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  readonly glyph = input.required<string>();
}
