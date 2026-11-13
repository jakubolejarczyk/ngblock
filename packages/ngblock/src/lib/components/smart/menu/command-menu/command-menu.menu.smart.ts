import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
  signal,
} from '@angular/core';
import { CommandMenuComponent } from '../../../dumb/menu/command-menu/command-menu.menu';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-command-menu-smart',
  imports: [CommandMenuComponent],
  template: `<ngb-command-menu
    [label]="label()"
    [items]="items()"
    [query]="query()"
    (queryChange)="query.set($event)"
    (selected)="selected.emit($event)"
  />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommandMenuSmartComponent {
  readonly label = input<InputValue<CommandMenuComponent['label']>>('Commands');
  readonly items = input.required<InputValue<CommandMenuComponent['items']>>();
  readonly selected = output<OutputValue<CommandMenuComponent['selected']>>();
  readonly query = signal('');
}
