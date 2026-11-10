import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'ngb-dropdown-menu',
  templateUrl: './dropdown-menu.menu.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownMenuComponent {
  readonly label = input('Menu');
  readonly isOpen = signal(false);

  toggle(): void {
    this.isOpen.update((open) => !open);
  }

  close(): void {
    this.isOpen.set(false);
  }
}
