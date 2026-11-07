import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { ToggleButtonComponent } from './toggle-button.control';

describe('ToggleButtonComponent', () => {
  let fixture: ComponentFixture<ToggleButtonComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleButtonComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ToggleButtonComponent);
  });

  it('emits the toggled pressed state', () => {
    const changed = vi.fn();
    fixture.componentInstance.changed.subscribe(changed);
    fixture.detectChanges();
    fixture.nativeElement.querySelector('button').click();
    expect(changed).toHaveBeenCalledWith(true);
  });
});
