import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { NumberFormComponent } from './number.form';

describe('NumberFormComponent', () => {
  let fixture: ComponentFixture<NumberFormComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberFormComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(NumberFormComponent);
    fixture.componentRef.setInput('label', 'Quantity');
  });

  it('emits numeric input and null for an empty value', () => {
    const changed = vi.fn();
    fixture.componentInstance.changed.subscribe(changed);
    fixture.detectChanges();
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');
    input.value = '12.5';
    input.dispatchEvent(new Event('input'));
    expect(changed).toHaveBeenLastCalledWith(12.5);
    input.value = '';
    input.dispatchEvent(new Event('input'));
    expect(changed).toHaveBeenLastCalledWith(null);
  });
});
