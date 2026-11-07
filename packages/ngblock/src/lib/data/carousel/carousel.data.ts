import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
} from '@angular/core';

export interface CarouselSlide {
  readonly title: string;
  readonly description?: string;
}

@Component({
  selector: 'ngb-carousel-data',
  templateUrl: './carousel.data.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselDataComponent {
  readonly slides = input.required<readonly CarouselSlide[]>();
  readonly index = signal(0);

  goTo(index: number): void {
    if (index >= 0 && index < this.slides().length) this.index.set(index);
  }

  next(): void {
    this.goTo(Math.min(this.index() + 1, this.slides().length - 1));
  }

  previous(): void {
    this.goTo(Math.max(this.index() - 1, 0));
  }
}
