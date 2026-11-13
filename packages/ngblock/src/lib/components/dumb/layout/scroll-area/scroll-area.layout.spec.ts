import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScrollAreaLayoutComponent } from './scroll-area.layout';

describe('ScrollAreaLayoutComponent', () => {
  let fixture: ComponentFixture<ScrollAreaLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollAreaLayoutComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ScrollAreaLayoutComponent);
  });

  it('provides a labelled, keyboard-focusable region', () => {
    fixture.componentRef.setInput('label', 'Recent activity');
    fixture.detectChanges();
    const region = fixture.nativeElement.querySelector('[role="region"]');
    expect(region.getAttribute('aria-label')).toBe('Recent activity');
    expect(region.getAttribute('tabindex')).toBe('0');
  });
});
