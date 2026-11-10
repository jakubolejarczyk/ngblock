import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { SplitButtonComponent } from './split-button.control';

describe('SplitButtonComponent', () => {
  let fixture: ComponentFixture<SplitButtonComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SplitButtonComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(SplitButtonComponent);
    fixture.componentRef.setInput('label', 'Save');
    fixture.componentRef.setInput('options', [
      { label: 'Draft', value: 'draft' },
    ]);
  });

  it('opens the action menu and emits the chosen option', () => {
    const action = vi.fn();
    fixture.componentInstance.action.subscribe(action);
    fixture.detectChanges();
    fixture.nativeElement.querySelector('[aria-label="More actions"]').click();
    fixture.detectChanges();
    fixture.nativeElement.querySelector('[role="menuitem"]').click();
    expect(action).toHaveBeenCalledWith('draft');
    expect(fixture.componentInstance.open()).toBe(false);
  });
});
