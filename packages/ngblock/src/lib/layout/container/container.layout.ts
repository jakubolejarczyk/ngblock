import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'ngb-container-layout',
  templateUrl: './container.layout.html',
  styleUrl: './container.layout.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainerLayoutComponent {
  readonly size = input<'small' | 'medium' | 'large' | 'full'>('large');
}
