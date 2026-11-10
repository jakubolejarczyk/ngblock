import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContainerLayoutComponent } from './container.layout';

describe('ContainerLayoutComponent', () => {
  let fixture: ComponentFixture<ContainerLayoutComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerLayoutComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ContainerLayoutComponent);
  });

  it('exposes its responsive size', () => {
    fixture.componentRef.setInput('size', 'small');
    fixture.detectChanges();
    expect(
      fixture.nativeElement
        .querySelector('.container')
        .getAttribute('data-size'),
    ).toBe('small');
  });
});
