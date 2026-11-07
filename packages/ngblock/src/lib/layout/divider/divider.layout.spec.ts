import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DividerLayoutComponent } from './divider.layout';

describe('DividerLayoutComponent', () => {
  let fixture: ComponentFixture<DividerLayoutComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DividerLayoutComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(DividerLayoutComponent);
  });

  it('renders a semantic horizontal divider by default', () => {
    fixture.detectChanges();
    expect(
      fixture.nativeElement
        .querySelector('hr')
        .getAttribute('data-orientation'),
    ).toBe('horizontal');
  });
});
