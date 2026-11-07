import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { AutocompleteFormComponent } from './autocomplete.form';

describe('AutocompleteFormComponent', () => {
  let fixture: ComponentFixture<AutocompleteFormComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutocompleteFormComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AutocompleteFormComponent);
    fixture.componentRef.setInput('label', 'Framework');
    fixture.componentRef.setInput('options', ['Angular', 'React']);
  });

  it('renders suggestions and emits typed values', () => {
    const changed = vi.fn();
    fixture.componentInstance.changed.subscribe(changed);
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelectorAll('datalist option').length,
    ).toBe(2);
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');
    input.value = 'Angular';
    input.dispatchEvent(new Event('input'));
    expect(changed).toHaveBeenCalledWith('Angular');
  });
});
