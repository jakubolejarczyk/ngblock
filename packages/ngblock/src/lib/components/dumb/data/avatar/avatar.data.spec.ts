import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvatarDataComponent } from './avatar.data';

describe('AvatarDataComponent', () => {
  let fixture: ComponentFixture<AvatarDataComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarDataComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AvatarDataComponent);
    fixture.componentRef.setInput('name', 'Alex Morgan');
  });

  it('derives accessible initials when no image is provided', () => {
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector('[role="img"]').textContent,
    ).toBe('AM');
    expect(
      fixture.nativeElement
        .querySelector('[role="img"]')
        .getAttribute('aria-label'),
    ).toBe('Alex Morgan');
  });
});
