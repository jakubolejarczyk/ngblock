import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BadgeMessageComponent } from './badge.message';

describe('BadgeMessageComponent', () => {
  let fixture: ComponentFixture<BadgeMessageComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeMessageComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(BadgeMessageComponent);
  });

  it('exposes its tone and projected text', () => {
    fixture.componentRef.setInput('tone', 'success');
    fixture.detectChanges();
    const badge = fixture.nativeElement.querySelector('span');
    expect(badge.getAttribute('data-tone')).toBe('success');
  });
});
