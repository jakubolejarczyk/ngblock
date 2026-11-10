import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { DrawerOverlayComponent } from './drawer.overlay';

describe('DrawerOverlayComponent', () => {
  let fixture: ComponentFixture<DrawerOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrawerOverlayComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(DrawerOverlayComponent);
    fixture.componentRef.setInput('title', 'Settings');
  });

  it('renders the labelled drawer when open', () => {
    fixture.componentRef.setInput('open', true);
    fixture.detectChanges();
    expect(
      fixture.nativeElement
        .querySelector('[role="dialog"]')
        .getAttribute('aria-label'),
    ).toBe('Settings');
  });

  it('emits closed from the close button', () => {
    const closed = vi.fn();
    fixture.componentInstance.closed.subscribe(closed);
    fixture.componentRef.setInput('open', true);
    fixture.detectChanges();
    fixture.nativeElement.querySelector('aside button').click();
    expect(closed).toHaveBeenCalledOnce();
  });
});
