import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'ngb-link-control',
  templateUrl: './link.control.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkComponent {
  readonly href = input.required<string>();
  readonly external = input(false);
}
