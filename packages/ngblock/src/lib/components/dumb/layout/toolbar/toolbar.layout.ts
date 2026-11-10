import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'ngb-toolbar-layout',
  templateUrl: './toolbar.layout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarLayoutComponent {
  readonly label = input('Toolbar');
}
