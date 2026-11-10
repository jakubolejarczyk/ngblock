import { ChangeDetectionStrategy, Component, input, model, output } from '@angular/core';
import { DrawerOverlayComponent } from '../../../dumb/overlay/drawer/drawer.overlay';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-drawer-overlay-smart',
  imports: [DrawerOverlayComponent],
  template: `<ngb-drawer-overlay [open]="open()" [title]="title()" [side]="side()" (closed)="onClosed($event)"><ng-content /></ngb-drawer-overlay>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerOverlaySmartComponent {
  readonly open = model<InputValue<DrawerOverlayComponent['open']>>(false);
  readonly title = input.required<InputValue<DrawerOverlayComponent['title']>>();
  readonly side = input<InputValue<DrawerOverlayComponent['side']>>('right');
  readonly closed = output<OutputValue<DrawerOverlayComponent['closed']>>();

  onClosed(value: OutputValue<DrawerOverlayComponent['closed']>): void {
    this.open.set(false);
    this.closed.emit(value);
  }
}
