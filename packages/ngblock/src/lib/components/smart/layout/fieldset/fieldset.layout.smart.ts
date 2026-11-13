import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FieldsetLayoutComponent } from '../../../dumb/layout/fieldset/fieldset.layout';
import type { InputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-fieldset-layout-smart',
  imports: [FieldsetLayoutComponent],
  template: `<ngb-fieldset-layout [legend]="legend()" [disabled]="disabled()"
    ><ng-content
  /></ngb-fieldset-layout>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldsetLayoutSmartComponent {
  readonly legend =
    input.required<InputValue<FieldsetLayoutComponent['legend']>>();
  readonly disabled =
    input<InputValue<FieldsetLayoutComponent['disabled']>>(false);
}
