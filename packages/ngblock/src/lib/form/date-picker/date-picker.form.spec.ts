import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { DatePickerFormComponent } from './date-picker.form';

describe('DatePickerFormComponent', () => {
  let fixture: ComponentFixture<DatePickerFormComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatePickerFormComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(DatePickerFormComponent);
    fixture.componentRef.setInput('label', 'Start date');
  });

  it('emits a normalized native date value', () => {
    const changed = vi.fn();
    fixture.componentInstance.changed.subscribe(changed);
    fixture.detectChanges();
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');
    input.value = '2026-11-07';
    input.dispatchEvent(new Event('change'));
    expect(changed).toHaveBeenCalledWith('2026-11-07');
  });
});
