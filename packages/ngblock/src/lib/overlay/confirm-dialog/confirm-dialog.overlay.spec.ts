import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { ConfirmDialogOverlayComponent } from './confirm-dialog.overlay';

describe('ConfirmDialogOverlayComponent', () => {
  let fixture: ComponentFixture<ConfirmDialogOverlayComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ConfirmDialogOverlayComponent] }).compileComponents();
    fixture = TestBed.createComponent(ConfirmDialogOverlayComponent);
    fixture.componentRef.setInput('title', 'Delete project?');
    fixture.componentRef.setInput('message', 'Cannot be undone.');
  });

  it('provides alert dialog semantics and emits confirmation', () => {
    const confirmed = vi.fn();
    fixture.componentInstance.confirmed.subscribe(confirmed);
    fixture.componentRef.setInput('open', true);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('[role="alertdialog"]')).not.toBeNull();
    fixture.nativeElement.querySelector('section button:last-child').click();
    expect(confirmed).toHaveBeenCalledOnce();
  });
});
