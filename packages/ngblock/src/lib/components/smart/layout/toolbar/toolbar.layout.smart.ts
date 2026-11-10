import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ToolbarLayoutComponent } from '../../../dumb/layout/toolbar/toolbar.layout';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-toolbar-layout-smart',
  imports: [ToolbarLayoutComponent],
  template: `<ngb-toolbar-layout [label]="label()"><ng-content /></ngb-toolbar-layout>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarLayoutSmartComponent {
  readonly label = input<InputValue<ToolbarLayoutComponent['label']>>('Toolbar');
}
