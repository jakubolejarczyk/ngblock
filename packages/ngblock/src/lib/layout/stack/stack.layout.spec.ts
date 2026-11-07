import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StackLayoutComponent } from './stack.layout';

describe('StackLayoutComponent', () => {
  let fixture: ComponentFixture<StackLayoutComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StackLayoutComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(StackLayoutComponent);
  });

  it('applies the chosen layout direction', () => {
    fixture.componentRef.setInput('direction', 'horizontal');
    fixture.detectChanges();
    expect(
      fixture.nativeElement
        .querySelector('.stack')
        .getAttribute('data-direction'),
    ).toBe('horizontal');
  });
});
