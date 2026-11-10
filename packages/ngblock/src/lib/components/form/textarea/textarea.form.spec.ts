import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { TextareaFormComponent } from './textarea.form';

describe('TextareaFormComponent', () => {
  let fixture: ComponentFixture<TextareaFormComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextareaFormComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(TextareaFormComponent);
    fixture.componentRef.setInput('label', 'Description');
  });

  it('emits edited text', () => {
    const changed = vi.fn();
    fixture.componentInstance.changed.subscribe(changed);
    fixture.detectChanges();
    const field: HTMLTextAreaElement =
      fixture.nativeElement.querySelector('textarea');
    field.value = 'Details';
    field.dispatchEvent(new Event('input'));
    expect(changed).toHaveBeenCalledWith('Details');
  });
});
