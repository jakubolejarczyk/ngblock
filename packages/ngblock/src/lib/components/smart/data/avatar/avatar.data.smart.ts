import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AvatarDataComponent } from '../../../dumb/data/avatar/avatar.data';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-avatar-data-smart',
  imports: [AvatarDataComponent],
  template: `<ngb-avatar-data [name]="name()" [src]="src()"><ng-content /></ngb-avatar-data>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarDataSmartComponent {
  readonly name = input.required<InputValue<AvatarDataComponent['name']>>();
  readonly src = input<InputValue<AvatarDataComponent['src']>>('');
}
