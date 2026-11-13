import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

export interface CommandMenuItem {
  readonly label: string;
  readonly description?: string;
}

@Component({
  selector: 'ngb-command-menu',
  templateUrl: './command-menu.menu.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommandMenuComponent {
  readonly label = input('Commands');
  readonly items = input.required<readonly CommandMenuItem[]>();
  readonly query = input('');
  readonly queryChange = output<string>();
  readonly selected = output<CommandMenuItem>();

  onQueryChange(event: Event): void {
    this.queryChange.emit((event.target as HTMLInputElement).value);
  }

  matchingItems(): readonly CommandMenuItem[] {
    const query = this.query().trim().toLocaleLowerCase();
    return query
      ? this.items().filter((item) =>
          `${item.label} ${item.description ?? ''}`
            .toLocaleLowerCase()
            .includes(query),
        )
      : this.items();
  }
}
