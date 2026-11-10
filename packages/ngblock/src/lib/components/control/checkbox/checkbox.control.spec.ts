import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { CheckboxComponent } from './checkbox.control';

describe('CheckboxComponent', () => {
  let fixture: ComponentFixture<CheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(CheckboxComponent);
  });

  it('projects its label and emits the changed state', () => {
    const changed = vi.fn();
    fixture.componentInstance.changed.subscribe(changed);
    fixture.detectChanges();
    const checkbox: HTMLInputElement =
      fixture.nativeElement.querySelector('input');
    checkbox.checked = true;
    checkbox.dispatchEvent(new Event('change'));
    expect(changed).toHaveBeenCalledWith(true);
  });

  it('supports the checked and disabled inputs', () => {
    fixture.componentRef.setInput('checked', true);
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();
    const checkbox: HTMLInputElement =
      fixture.nativeElement.querySelector('input');
    expect(checkbox.checked).toBe(true);
    expect(checkbox.disabled).toBe(true);
  });
});
