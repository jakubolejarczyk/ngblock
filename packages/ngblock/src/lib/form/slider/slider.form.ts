import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'ngb-slider-form',
  templateUrl: './slider.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderFormComponent {
  readonly label = input.required<string>();
  readonly value = input(50);
  readonly min = input(0);
  readonly max = input(100);
  readonly step = input(1);
  readonly changed = output<number>();

  onInput(event: Event): void {
    this.changed.emit(Number((event.target as HTMLInputElement).value));
  }
}
