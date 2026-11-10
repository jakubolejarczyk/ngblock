import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { LinkComponent } from '../../../dumb/control/link/link.control';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-link-control-smart',
  imports: [LinkComponent],
  template: `<ngb-link-control [href]="href()" [external]="external()"><ng-content /></ngb-link-control>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkSmartComponent {
  readonly href = input.required<InputValue<LinkComponent['href']>>();
  readonly external = input<InputValue<LinkComponent['external']>>(false);
}
