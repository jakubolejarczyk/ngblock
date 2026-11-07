import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

export interface MenuStep {
  readonly label: string;
  readonly description?: string;
}

@Component({
  selector: 'ngb-steps-menu',
  templateUrl: './steps.menu.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepsMenuComponent {
  readonly steps = input.required<readonly MenuStep[]>();
  readonly activeIndex = input(0);
  readonly activeIndexChange = output<number>();
}
