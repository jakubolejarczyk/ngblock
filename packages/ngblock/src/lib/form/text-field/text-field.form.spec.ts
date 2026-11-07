import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { TextFieldFormComponent } from './text-field.form';

describe('TextFieldFormComponent', () => {
  let fixture: ComponentFixture<TextFieldFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextFieldFormComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(TextFieldFormComponent);
    fixture.componentRef.setInput('label', 'Email');
  });

  it('associates the label with a configurable native input', () => {
    fixture.componentRef.setInput('type', 'email');
    fixture.componentRef.setInput('required', true);
    fixture.detectChanges();
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');
    expect(input.type).toBe('email');
    expect(input.required).toBe(true);
    expect(fixture.nativeElement.querySelector('label').textContent).toContain(
      'Email',
    );
  });

  it('emits the changed input value', () => {
    const changed = vi.fn();
    fixture.componentInstance.changed.subscribe(changed);
    fixture.detectChanges();
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');
    input.value = 'user@example.com';
    input.dispatchEvent(new Event('input'));
    expect(changed).toHaveBeenCalledWith('user@example.com');
  });
});
