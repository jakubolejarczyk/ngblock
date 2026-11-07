import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarouselDataComponent } from './carousel.data';

describe('CarouselDataComponent', () => {
  let fixture: ComponentFixture<CarouselDataComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselDataComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(CarouselDataComponent);
    fixture.componentRef.setInput('slides', [
      { title: 'One' },
      { title: 'Two' },
    ]);
  });

  it('moves between labelled slides', () => {
    fixture.detectChanges();
    fixture.nativeElement.querySelector('[aria-label="Next slide"]').click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('article h2').textContent).toBe(
      'Two',
    );
    expect(
      fixture.nativeElement.querySelector('article').getAttribute('aria-label'),
    ).toBe('2 of 2');
  });
});
