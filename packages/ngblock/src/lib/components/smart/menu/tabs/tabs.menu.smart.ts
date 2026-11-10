import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { TabsMenuComponent } from '../../../dumb/menu/tabs/tabs.menu';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-tabs-menu-smart',
  imports: [TabsMenuComponent],
  template: `<ngb-tabs-menu [tabs]="tabs()" (selected)="onSelected($event)"><ng-content /></ngb-tabs-menu>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsMenuSmartComponent {
  readonly tabs = input.required<InputValue<TabsMenuComponent['tabs']>>();
  readonly selected = output<OutputValue<TabsMenuComponent['selected']>>();

  onSelected(value: OutputValue<TabsMenuComponent['selected']>): void {
    this.selected.emit(value);
  }
}
