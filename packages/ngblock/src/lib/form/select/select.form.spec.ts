import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { SelectFormComponent } from './select.form';

describe('SelectFormComponent', () => {
  let fixture: ComponentFixture<SelectFormComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectFormComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(SelectFormComponent);
    fixture.componentRef.setInput('label', 'Country');
    fixture.componentRef.setInput('options', [
      { label: 'Canada', value: 'ca' },
      { label: 'France', value: 'fr' },
    ]);
  });

  it('emits the selected value', () => {
    const changed = vi.fn();
    fixture.componentInstance.changed.subscribe(changed);
    fixture.detectChanges();
    const select: HTMLSelectElement =
      fixture.nativeElement.querySelector('select');
    select.value = 'fr';
    select.dispatchEvent(new Event('change'));
    expect(changed).toHaveBeenCalledWith('fr');
  });
});
