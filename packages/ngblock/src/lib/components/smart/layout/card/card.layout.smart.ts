import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CardLayoutComponent } from '../../../dumb/layout/card/card.layout';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-card-layout-smart',
  imports: [CardLayoutComponent],
  template: `<ngb-card-layout [title]="title()"><ng-content /></ngb-card-layout>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardLayoutSmartComponent {
  readonly title = input.required<InputValue<CardLayoutComponent['title']>>();
}
