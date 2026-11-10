import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
  signal,
} from '@angular/core';

export interface ContextMenuItem {
  label: string;
  disabled?: boolean;
}

@Component({
  selector: 'ngb-context-menu',
  templateUrl: './context-menu.menu.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContextMenuComponent {
  readonly label = input('More actions');
  readonly items = input.required<readonly ContextMenuItem[]>();
  readonly selected = output<ContextMenuItem>();
  readonly isOpen = signal(false);

  toggle(): void {
    this.isOpen.update((open) => !open);
  }

  close(): void {
    this.isOpen.set(false);
  }

  select(item: ContextMenuItem): void {
    if (item.disabled) return;
    this.selected.emit(item);
    this.close();
  }
}
