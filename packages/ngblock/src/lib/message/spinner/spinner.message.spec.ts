import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpinnerMessageComponent } from './spinner.message';

describe('SpinnerMessageComponent', () => {
  let fixture: ComponentFixture<SpinnerMessageComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpinnerMessageComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(SpinnerMessageComponent);
  });

  it('announces its loading label', () => {
    fixture.componentRef.setInput('label', 'Loading results');
    fixture.detectChanges();
    expect(
      fixture.nativeElement
        .querySelector('[role="status"]')
        .getAttribute('aria-label'),
    ).toBe('Loading results');
  });
});
