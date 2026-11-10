import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PopoverOverlayComponent } from './popover.overlay';

describe('PopoverOverlayComponent', () => {
  let fixture: ComponentFixture<PopoverOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopoverOverlayComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(PopoverOverlayComponent);
  });

  it('toggles contextual content', () => {
    fixture.detectChanges();
    const trigger: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');
    expect(fixture.nativeElement.querySelector('[role="region"]')).toBeNull();
    trigger.click();
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector('[role="region"]'),
    ).not.toBeNull();
  });
});
