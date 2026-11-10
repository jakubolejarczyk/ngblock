import { ChangeDetectionStrategy, Component, input, model, output } from '@angular/core';
import { RatingFormComponent } from '../../../dumb/form/rating/rating.form';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-rating-form-smart',
  imports: [RatingFormComponent],
  template: `<ngb-rating-form [label]="label()" [value]="value()" [max]="max()" [disabled]="disabled()" (changed)="onChanged($event)"><ng-content /></ngb-rating-form>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingFormSmartComponent {
  readonly label = input<InputValue<RatingFormComponent['label']>>('Rating');
  readonly value = model<InputValue<RatingFormComponent['value']>>(0);
  readonly max = input<InputValue<RatingFormComponent['max']>>(5);
  readonly disabled = input<InputValue<RatingFormComponent['disabled']>>(false);
  readonly changed = output<OutputValue<RatingFormComponent['changed']>>();

  onChanged(value: OutputValue<RatingFormComponent['changed']>): void {
    this.value.set(value);
    this.changed.emit(value);
  }
}
