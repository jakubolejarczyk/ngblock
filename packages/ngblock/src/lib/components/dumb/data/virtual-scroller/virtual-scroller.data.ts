import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'ngb-virtual-scroller-data',
  templateUrl: './virtual-scroller.data.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VirtualScrollerDataComponent {
  readonly label = input('Items');
  readonly items = input.required<readonly string[]>();
  readonly itemHeight = input(40);
  readonly maxHeight = input('16rem');
  readonly overscan = input(2);
  readonly viewportItems = input(8);
  readonly safeItemHeight = computed(() =>
    Math.max(1, Math.floor(this.itemHeight())),
  );
  readonly safeViewportItems = computed(() =>
    Math.max(1, Math.floor(this.viewportItems())),
  );
  readonly safeOverscan = computed(() =>
    Math.max(0, Math.floor(this.overscan())),
  );
  readonly startIndex = signal(0);
  readonly windowStartIndex = computed(() =>
    Math.min(
      this.startIndex(),
      Math.max(
        0,
        this.items().length -
          this.safeViewportItems() -
          this.safeOverscan() * 2,
      ),
    ),
  );
  readonly visibleItems = computed(() =>
    this.items().slice(
      this.windowStartIndex(),
      this.windowStartIndex() +
        this.safeViewportItems() +
        this.safeOverscan() * 2,
    ),
  );
  readonly topSpace = computed(
    () => this.windowStartIndex() * this.safeItemHeight(),
  );
  readonly bottomSpace = computed(() =>
    Math.max(
      0,
      (this.items().length -
        this.windowStartIndex() -
        this.visibleItems().length) *
        this.safeItemHeight(),
    ),
  );

  onScroll(event: Event): void {
    const viewport = event.target as HTMLElement;
    const maxStart = Math.max(
      0,
      this.items().length - this.safeViewportItems() - this.safeOverscan() * 2,
    );
    this.startIndex.set(
      Math.min(
        maxStart,
        Math.max(
          0,
          Math.floor(viewport.scrollTop / this.safeItemHeight()) -
            this.safeOverscan(),
        ),
      ),
    );
  }
}
