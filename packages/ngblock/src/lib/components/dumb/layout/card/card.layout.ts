import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'ngb-card-layout',
  templateUrl: './card.layout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardLayoutComponent {
  readonly title = input.required<string>();
}
