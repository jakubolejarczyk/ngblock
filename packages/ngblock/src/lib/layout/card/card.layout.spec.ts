import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardLayoutComponent } from './card.layout';

describe('CardLayoutComponent', () => {
  let fixture: ComponentFixture<CardLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardLayoutComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(CardLayoutComponent);
    fixture.componentRef.setInput('title', 'Profile');
  });

  it('renders its title and projected content', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('h2').textContent).toBe(
      'Profile',
    );
  });
});
