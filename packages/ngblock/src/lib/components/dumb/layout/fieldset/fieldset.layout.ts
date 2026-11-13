import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'ngb-fieldset-layout',
  templateUrl: './fieldset.layout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldsetLayoutComponent {
  readonly legend = input.required<string>();
  readonly disabled = input(false);
}
