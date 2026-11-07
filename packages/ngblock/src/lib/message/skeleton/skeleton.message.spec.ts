import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkeletonMessageComponent } from './skeleton.message';

describe('SkeletonMessageComponent', () => {
  let fixture: ComponentFixture<SkeletonMessageComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkeletonMessageComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(SkeletonMessageComponent);
  });

  it('renders the requested number of loading lines', () => {
    fixture.componentRef.setInput('lines', 2);
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelectorAll('.skeleton > span').length,
    ).toBe(2);
  });
});
