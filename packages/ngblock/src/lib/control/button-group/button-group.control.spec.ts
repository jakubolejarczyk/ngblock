import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonGroupComponent } from './button-group.control';

describe('ButtonGroupComponent', () => {
  let fixture: ComponentFixture<ButtonGroupComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonGroupComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ButtonGroupComponent);
  });

  it('labels its semantic group', () => {
    fixture.componentRef.setInput('label', 'Text formatting');
    fixture.detectChanges();
    expect(
      fixture.nativeElement
        .querySelector('[role="group"]')
        .getAttribute('aria-label'),
    ).toBe('Text formatting');
  });
});
