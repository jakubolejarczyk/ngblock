import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { SliderFormComponent } from './slider.form';

describe('SliderFormComponent', () => {
  let fixture: ComponentFixture<SliderFormComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderFormComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(SliderFormComponent);
    fixture.componentRef.setInput('label', 'Volume');
  });

  it('emits the updated numeric value', () => {
    const changed = vi.fn();
    fixture.componentInstance.changed.subscribe(changed);
    fixture.detectChanges();
    const slider: HTMLInputElement =
      fixture.nativeElement.querySelector('input');
    slider.value = '75';
    slider.dispatchEvent(new Event('input'));
    expect(changed).toHaveBeenCalledWith(75);
  });
});
