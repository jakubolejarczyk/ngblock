import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { SelectButtonFormComponent } from './select-button.form';

describe('SelectButtonFormComponent', () => {
  let fixture: ComponentFixture<SelectButtonFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectButtonFormComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(SelectButtonFormComponent);
    fixture.componentRef.setInput('label', 'View');
    fixture.componentRef.setInput('options', [
      { label: 'List', value: 'list' },
      { label: 'Grid', value: 'grid' },
    ]);
  });

  it('marks the selected option and emits when another is chosen', () => {
    const emit = vi.spyOn(fixture.componentInstance.changed, 'emit');
    fixture.componentRef.setInput('value', 'list');
    fixture.detectChanges();
    const buttons = fixture.nativeElement.querySelectorAll('button');
    expect(buttons[0].getAttribute('aria-pressed')).toBe('true');
    buttons[1].click();
    expect(emit).toHaveBeenCalledWith('grid');
  });
});
