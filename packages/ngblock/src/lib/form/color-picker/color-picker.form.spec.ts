import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { ColorPickerFormComponent } from './color-picker.form';

describe('ColorPickerFormComponent', () => {
  let fixture: ComponentFixture<ColorPickerFormComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorPickerFormComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ColorPickerFormComponent);
    fixture.componentRef.setInput('label', 'Accent color');
  });

  it('emits the selected color', () => {
    const changed = vi.fn();
    fixture.componentInstance.changed.subscribe(changed);
    fixture.detectChanges();
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');
    input.value = '#ff0000';
    input.dispatchEvent(new Event('input'));
    expect(changed).toHaveBeenCalledWith('#ff0000');
  });
});
