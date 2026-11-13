import {
  ChangeDetectionStrategy,
  Component,
  input,
  model,
} from '@angular/core';
import { SplitterLayoutComponent } from '../../../dumb/layout/splitter/splitter.layout';
import type { InputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-splitter-layout-smart',
  imports: [SplitterLayoutComponent],
  template: `<ngb-splitter-layout
    [orientation]="orientation()"
    [position]="position()"
    (positionChange)="position.set($event)"
    ><ng-content select="[primary]" /><ng-content select="[secondary]"
  /></ngb-splitter-layout>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SplitterLayoutSmartComponent {
  readonly orientation =
    input<InputValue<SplitterLayoutComponent['orientation']>>('horizontal');
  readonly position =
    model<InputValue<SplitterLayoutComponent['position']>>(50);
}
