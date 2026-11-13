import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { SpeedDialComponent } from './speed-dial.control';

describe('SpeedDialComponent', () => {
  let fixture: ComponentFixture<SpeedDialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeedDialComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(SpeedDialComponent);
    fixture.componentRef.setInput('actions', [
      { label: 'Create', value: 'create' },
    ]);
  });

  it('toggles its menu and emits an action selection', () => {
    const openChange = vi.spyOn(fixture.componentInstance.openChange, 'emit');
    const selected = vi.spyOn(fixture.componentInstance.selected, 'emit');
    fixture.detectChanges();
    fixture.nativeElement.querySelector('button').click();
    expect(openChange).toHaveBeenCalledWith(true);

    fixture.componentRef.setInput('open', true);
    fixture.detectChanges();
    fixture.nativeElement.querySelector('[role="menuitem"]').click();
    expect(selected).toHaveBeenCalledWith({ label: 'Create', value: 'create' });
  });
});
