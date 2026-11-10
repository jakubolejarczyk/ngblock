import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { DateRangePickerFormComponent } from './date-range-picker.form';

describe('DateRangePickerFormComponent', () => {
  let fixture: ComponentFixture<DateRangePickerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateRangePickerFormComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(DateRangePickerFormComponent);
    fixture.componentRef.setInput('label', 'Travel dates');
    fixture.componentRef.setInput('start', '2026-11-10');
  });

  it('emits the updated range when the end date changes', () => {
    const changed = vi.fn();
    fixture.componentInstance.changed.subscribe(changed);
    fixture.detectChanges();
    const input: HTMLInputElement =
      fixture.nativeElement.querySelectorAll('input')[1];
    input.value = '2026-11-15';
    input.dispatchEvent(new Event('change'));
    expect(changed).toHaveBeenCalledWith({
      start: '2026-11-10',
      end: '2026-11-15',
    });
  });
});
