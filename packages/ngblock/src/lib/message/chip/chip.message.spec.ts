import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { ChipMessageComponent } from './chip.message';

describe('ChipMessageComponent', () => {
  let fixture: ComponentFixture<ChipMessageComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipMessageComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ChipMessageComponent);
    fixture.componentRef.setInput('label', 'Design');
    fixture.componentRef.setInput('removable', true);
  });

  it('announces the item in its removal action', () => {
    const removed = vi.fn();
    fixture.componentInstance.removed.subscribe(removed);
    fixture.detectChanges();
    const button: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');
    expect(button.getAttribute('aria-label')).toBe('Remove Design');
    button.click();
    expect(removed).toHaveBeenCalledOnce();
  });
});
