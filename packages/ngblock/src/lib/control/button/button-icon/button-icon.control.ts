import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
} from '@angular/core';
import { IconComponent } from '../../../misc/icon/icon.component';
import { ButtonBaseComponent } from '../button-base/button-base.control';

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
  imports: [ButtonBaseComponent, IconComponent],
  templateUrl: './button-icon.control.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonIconComponent {
  readonly type = input<HTMLButtonElement['type']>('button');
  readonly disabled = input(false);
  readonly icon = input.required<ButtonIcon>();
  readonly iconGlyph = computed(() => BUTTON_ICONS[this.icon()]);
  readonly ariaLabel = input.required<string>();
  readonly clicked = output<MouseEvent>();
}
