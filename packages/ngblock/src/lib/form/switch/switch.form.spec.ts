import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { SwitchFormComponent } from './switch.form';

describe('SwitchFormComponent', () => {
  let fixture: ComponentFixture<SwitchFormComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchFormComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(SwitchFormComponent);
    fixture.componentRef.setInput('label', 'Notifications');
  });

  it('provides switch semantics and emits its new state', () => {
    const changed = vi.fn();
    fixture.componentInstance.changed.subscribe(changed);
    fixture.detectChanges();
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');
    expect(input.getAttribute('role')).toBe('switch');
    input.checked = true;
    input.dispatchEvent(new Event('change'));
    expect(changed).toHaveBeenCalledWith(true);
  });
});
