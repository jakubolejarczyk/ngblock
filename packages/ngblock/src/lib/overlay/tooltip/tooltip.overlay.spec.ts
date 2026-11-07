import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TooltipOverlayComponent } from './tooltip.overlay';

describe('TooltipOverlayComponent', () => {
  let fixture: ComponentFixture<TooltipOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TooltipOverlayComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(TooltipOverlayComponent);
    fixture.componentRef.setInput('text', 'Helpful hint');
  });

  it('shows its tooltip on focus', () => {
    fixture.detectChanges();
    fixture.nativeElement
      .querySelector('span')
      .dispatchEvent(new Event('focus'));
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector('[role="tooltip"]').textContent,
    ).toBe('Helpful hint');
  });
});
