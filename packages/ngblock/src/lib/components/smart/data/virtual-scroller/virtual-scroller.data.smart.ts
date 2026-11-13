import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { VirtualScrollerDataComponent } from '../../../dumb/data/virtual-scroller/virtual-scroller.data';
import type { InputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-virtual-scroller-data-smart',
  imports: [VirtualScrollerDataComponent],
  template: `<ngb-virtual-scroller-data
    [label]="label()"
    [items]="items()"
    [itemHeight]="itemHeight()"
    [maxHeight]="maxHeight()"
    [overscan]="overscan()"
    [viewportItems]="viewportItems()"
  />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VirtualScrollerDataSmartComponent {
  readonly label =
    input<InputValue<VirtualScrollerDataComponent['label']>>('Items');
  readonly items =
    input.required<InputValue<VirtualScrollerDataComponent['items']>>();
  readonly itemHeight =
    input<InputValue<VirtualScrollerDataComponent['itemHeight']>>(40);
  readonly maxHeight =
    input<InputValue<VirtualScrollerDataComponent['maxHeight']>>('16rem');
  readonly overscan =
    input<InputValue<VirtualScrollerDataComponent['overscan']>>(2);
  readonly viewportItems =
    input<InputValue<VirtualScrollerDataComponent['viewportItems']>>(8);
}
