import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { ContextMenuComponent } from '../../../dumb/menu/context-menu/context-menu.menu';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-context-menu-smart',
  imports: [ContextMenuComponent],
  template: `<ngb-context-menu [label]="label()" [items]="items()" (selected)="selected.emit($event)" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContextMenuSmartComponent {
  readonly label = input<InputValue<ContextMenuComponent['label']>>(
    'More actions',
  );
  readonly items =
    input.required<InputValue<ContextMenuComponent['items']>>();
  readonly selected =
    output<OutputValue<ContextMenuComponent['selected']>>();
}
