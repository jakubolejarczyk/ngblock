import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
} from '@angular/core';

export interface AccordionItem {
  readonly title: string;
  readonly content: string;
}

@Component({
  selector: 'ngb-accordion-menu',
  templateUrl: './accordion.menu.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionMenuComponent {
  readonly items = input.required<readonly AccordionItem[]>();
  readonly expandedIndex = signal(-1);

  toggle(index: number): void {
    this.expandedIndex.update((current) => (current === index ? -1 : index));
  }
}
