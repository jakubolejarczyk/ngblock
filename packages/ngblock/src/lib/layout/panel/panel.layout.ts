import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'ngb-panel-layout',
  templateUrl: './panel.layout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelLayoutComponent {
  readonly title = input.required<string>();
  readonly collapsible = input(false);
  readonly expanded = signal(true);
}
