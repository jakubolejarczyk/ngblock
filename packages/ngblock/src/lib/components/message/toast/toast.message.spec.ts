import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { ToastMessageComponent } from './toast.message';

describe('ToastMessageComponent', () => {
  let fixture: ComponentFixture<ToastMessageComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastMessageComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ToastMessageComponent);
    fixture.componentRef.setInput('title', 'Saved');
  });

  it('announces and emits dismissal', () => {
    const dismissed = vi.fn();
    fixture.componentInstance.dismissed.subscribe(dismissed);
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector('[role="status"]'),
    ).not.toBeNull();
    fixture.nativeElement.querySelector('button').click();
    expect(dismissed).toHaveBeenCalledOnce();
  });
});
