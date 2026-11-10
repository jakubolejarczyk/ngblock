import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
} from '@angular/core';

export interface ResponsiveNavigationItem {
  readonly label: string;
  readonly href: string;
}

@Component({
  selector: 'ngb-responsive-navigation-menu',
  templateUrl: './responsive-navigation.menu.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResponsiveNavigationMenuComponent {
  readonly label = input('Main navigation');
  readonly menuLabel = input('Menu');
  readonly items = input.required<readonly ResponsiveNavigationItem[]>();
  readonly isOpen = signal(false);

  toggle(): void {
    this.isOpen.update((open) => !open);
  }

  close(): void {
    this.isOpen.set(false);
  }
}
