import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { PanelLayoutComponent } from '../../../dumb/layout/panel/panel.layout';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-panel-layout-smart',
  imports: [PanelLayoutComponent],
  template: `<ngb-panel-layout [title]="title()" [collapsible]="collapsible()"><ng-content /></ngb-panel-layout>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelLayoutSmartComponent {
  readonly title = input.required<InputValue<PanelLayoutComponent['title']>>();
  readonly collapsible = input<InputValue<PanelLayoutComponent['collapsible']>>(false);
}
