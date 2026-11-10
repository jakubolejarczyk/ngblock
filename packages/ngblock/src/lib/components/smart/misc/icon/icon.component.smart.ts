import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconComponent } from '../../../dumb/misc/icon/icon.component';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-icon-smart',
  imports: [IconComponent],
  template: `<ngb-icon [glyph]="glyph()"><ng-content /></ngb-icon>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSmartComponent {
  readonly glyph = input.required<InputValue<IconComponent['glyph']>>();
}
