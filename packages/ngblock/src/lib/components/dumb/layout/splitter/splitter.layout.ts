import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'ngb-splitter-layout',
  templateUrl: './splitter.layout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SplitterLayoutComponent {
  readonly orientation = input<'horizontal' | 'vertical'>('horizontal');
  readonly position = input(50);
  readonly positionChange = output<number>();

  boundedPosition(): number {
    return Math.min(90, Math.max(10, this.position()));
  }

  onPositionChange(event: Event): void {
    this.positionChange.emit(Number((event.target as HTMLInputElement).value));
  }
}
