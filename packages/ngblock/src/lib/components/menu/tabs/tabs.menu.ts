import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
  signal,
} from '@angular/core';

export interface MenuTab {
  readonly id: string;
  readonly label: string;
  readonly content: string;
}

@Component({
  selector: 'ngb-tabs-menu',
  templateUrl: './tabs.menu.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsMenuComponent {
  readonly tabs = input.required<readonly MenuTab[]>();
  readonly selected = output<string>();
  readonly activeId = signal('');

  select(id: string): void {
    this.activeId.set(id);
    this.selected.emit(id);
  }
}
