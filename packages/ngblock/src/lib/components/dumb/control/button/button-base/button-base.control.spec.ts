import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { ButtonBaseComponent } from './button-base.control';

describe('ButtonBaseComponent', () => {
  let fixture: ComponentFixture<ButtonBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonBaseComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ButtonBaseComponent);
    fixture.detectChanges();
  });

  it('forwards native clicks and applies the accessible name', () => {
    const emit = vi.spyOn(fixture.componentInstance.clicked, 'emit');
    fixture.componentRef.setInput('ariaLabel', 'Save changes');
    fixture.detectChanges();
    fixture.nativeElement.querySelector('button').click();

    expect(
      fixture.nativeElement.querySelector('button').getAttribute('aria-label'),
    ).toBe('Save changes');
    expect(emit).toHaveBeenCalledWith(expect.any(MouseEvent));
  });

  it('disables the native button when requested', () => {
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('button').disabled).toBe(true);
  });
});
