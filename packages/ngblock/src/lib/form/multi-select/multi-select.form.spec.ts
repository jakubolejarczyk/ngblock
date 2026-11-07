import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { MultiSelectFormComponent } from './multi-select.form';

describe('MultiSelectFormComponent', () => {
  let fixture: ComponentFixture<MultiSelectFormComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiSelectFormComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(MultiSelectFormComponent);
    fixture.componentRef.setInput('label', 'Colors');
    fixture.componentRef.setInput('options', [
      { label: 'Blue', value: 'blue' },
      { label: 'Green', value: 'green' },
    ]);
  });

  it('emits all selected values', () => {
    const changed = vi.fn();
    fixture.componentInstance.changed.subscribe(changed);
    fixture.detectChanges();
    const select: HTMLSelectElement =
      fixture.nativeElement.querySelector('select');
    select.options[0].selected = true;
    select.options[1].selected = true;
    select.dispatchEvent(new Event('change'));
    expect(changed).toHaveBeenCalledWith(['blue', 'green']);
  });
});
