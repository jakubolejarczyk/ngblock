import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'ngb-rating-form',
  templateUrl: './rating.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingFormComponent {
  readonly label = input('Rating');
  readonly value = input(0);
  readonly max = input(5);
  readonly disabled = input(false);
  readonly changed = output<number>();
}
