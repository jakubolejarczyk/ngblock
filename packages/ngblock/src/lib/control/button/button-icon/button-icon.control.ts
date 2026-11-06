import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
} from '@angular/core';

export const BUTTON_ICONS = {
  add: '+',
  check: '✓',
  close: '×',
  delete: '⌫',
  edit: '✎',
  favorite: '★',
  home: '⌂',
  menu: '☰',
  remove: '−',
  search: '⌕',
} as const;

export type ButtonIcon = keyof typeof BUTTON_ICONS;

@Component({
  selector: 'ngb-button-icon-control',
  imports: [],
  templateUrl: './button-icon.control.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonIconComponent {
  readonly icon = input.required<ButtonIcon>();
  readonly iconGlyph = computed(() => BUTTON_ICONS[this.icon()]);
  readonly ariaLabel = input.required<string>();
  readonly type = input<HTMLButtonElement['type']>('button');
  readonly disabled = input(false);
  readonly buttonClick = output<MouseEvent>();

  onClick(event: MouseEvent): void {
    this.buttonClick.emit(event);
  }
}
