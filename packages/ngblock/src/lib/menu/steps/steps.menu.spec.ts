import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { StepsMenuComponent } from './steps.menu';

describe('StepsMenuComponent', () => {
  let fixture: ComponentFixture<StepsMenuComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepsMenuComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(StepsMenuComponent);
    fixture.componentRef.setInput('steps', [
      { label: 'One' },
      { label: 'Two' },
      { label: 'Three' },
    ]);
  });

  it('marks the active step and prevents future steps', () => {
    fixture.componentRef.setInput('activeIndex', 1);
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector('[aria-current="step"]'),
    ).not.toBeNull();
    expect(
      fixture.nativeElement.querySelectorAll('button:disabled').length,
    ).toBe(1);
  });

  it('emits when a prior step is selected', () => {
    const changed = vi.fn();
    fixture.componentInstance.activeIndexChange.subscribe(changed);
    fixture.detectChanges();
    fixture.nativeElement.querySelector('button').click();
    expect(changed).toHaveBeenCalledWith(0);
  });
});
