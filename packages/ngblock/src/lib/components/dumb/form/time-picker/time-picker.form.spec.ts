import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { TimePickerFormComponent } from './time-picker.form';

describe('TimePickerFormComponent', () => {
  let fixture: ComponentFixture<TimePickerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimePickerFormComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(TimePickerFormComponent);
    fixture.componentRef.setInput('label', 'Start time');
  });

  it('emits the selected time', () => {
    const changed = vi.fn();
    fixture.componentInstance.changed.subscribe(changed);
    fixture.detectChanges();
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    input.value = '09:30';
    input.dispatchEvent(new Event('change'));
    expect(changed).toHaveBeenCalledWith('09:30');
  });
});
