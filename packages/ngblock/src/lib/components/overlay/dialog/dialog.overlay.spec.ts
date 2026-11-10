import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { DialogOverlayComponent } from './dialog.overlay';

describe('DialogOverlayComponent', () => {
  let fixture: ComponentFixture<DialogOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogOverlayComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(DialogOverlayComponent);
    fixture.componentRef.setInput('title', 'Confirm');
  });

  it('renders an accessible dialog only when open', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('[role="dialog"]')).toBeNull();

    fixture.componentRef.setInput('open', true);
    fixture.detectChanges();
    expect(
      fixture.nativeElement
        .querySelector('[role="dialog"]')
        .getAttribute('aria-label'),
    ).toBe('Confirm');
  });

  it('emits closed when the close button is activated', () => {
    const closed = vi.fn();
    fixture.componentInstance.closed.subscribe(closed);
    fixture.componentRef.setInput('open', true);
    fixture.detectChanges();
    fixture.nativeElement.querySelector('button').click();
    expect(closed).toHaveBeenCalledOnce();
  });

  it('emits closed when the backdrop is clicked', () => {
    const closed = vi.fn();
    fixture.componentInstance.closed.subscribe(closed);
    fixture.componentRef.setInput('open', true);
    fixture.detectChanges();
    fixture.nativeElement.querySelector('.dialog-backdrop').click();
    expect(closed).toHaveBeenCalledOnce();
  });

  it('emits closed when Escape is pressed while open', () => {
    const closed = vi.fn();
    fixture.componentInstance.closed.subscribe(closed);
    fixture.componentRef.setInput('open', true);
    fixture.detectChanges();
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    expect(closed).toHaveBeenCalledOnce();
  });
});
