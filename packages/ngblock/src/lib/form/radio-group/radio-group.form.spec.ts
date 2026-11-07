import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { RadioGroupFormComponent } from './radio-group.form';

describe('RadioGroupFormComponent', () => {
  let fixture: ComponentFixture<RadioGroupFormComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioGroupFormComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(RadioGroupFormComponent);
    fixture.componentRef.setInput('label', 'Plan');
    fixture.componentRef.setInput('options', [
      { label: 'Basic', value: 'basic' },
      { label: 'Pro', value: 'pro' },
    ]);
  });

  it('emits the selected option', () => {
    const changed = vi.fn();
    fixture.componentInstance.changed.subscribe(changed);
    fixture.detectChanges();
    fixture.nativeElement
      .querySelectorAll('input')[1]
      .dispatchEvent(new Event('change'));
    expect(changed).toHaveBeenCalledWith('pro');
  });
});
