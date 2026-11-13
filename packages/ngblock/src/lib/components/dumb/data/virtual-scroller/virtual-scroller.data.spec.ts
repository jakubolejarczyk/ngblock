import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VirtualScrollerDataComponent } from './virtual-scroller.data';

describe('VirtualScrollerDataComponent', () => {
  let fixture: ComponentFixture<VirtualScrollerDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VirtualScrollerDataComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(VirtualScrollerDataComponent);
    fixture.componentRef.setInput(
      'items',
      Array.from({ length: 100 }, (_, i) => `Item ${i}`),
    );
    fixture.detectChanges();
  });

  it('renders a bounded window and advances it when scrolled', () => {
    const viewport = fixture.nativeElement.querySelector(
      '[role="list"]',
    ) as HTMLElement;
    expect(viewport.querySelectorAll('[role="listitem"]').length).toBeLessThan(
      20,
    );

    viewport.scrollTop = 1200;
    viewport.dispatchEvent(new Event('scroll'));
    fixture.detectChanges();

    expect(viewport.textContent).toContain('Item 28');
  });

  it('clamps the visible window when the data set shrinks', () => {
    const viewport = fixture.nativeElement.querySelector(
      '[role="list"]',
    ) as HTMLElement;
    viewport.scrollTop = 1200;
    viewport.dispatchEvent(new Event('scroll'));
    fixture.componentRef.setInput('items', ['First', 'Second']);
    fixture.detectChanges();

    expect(fixture.componentInstance.windowStartIndex()).toBe(0);
    expect(viewport.textContent).toContain('First');
  });
});
