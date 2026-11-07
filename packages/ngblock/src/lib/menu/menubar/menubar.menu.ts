import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface MenuBarItem {
  readonly label: string;
  readonly href?: string;
}

@Component({
  selector: 'ngb-menubar-menu',
  templateUrl: './menubar.menu.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenubarMenuComponent {
  readonly items = input.required<readonly MenuBarItem[]>();
}
