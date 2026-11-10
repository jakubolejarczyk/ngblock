import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutComponent } from './flex.layout';

describe('FlexLayoutComponent', () => {
  let fixture: ComponentFixture<FlexLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlexLayoutComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(FlexLayoutComponent);
  });

  it('applies flex direction, wrapping, and spacing', () => {
    fixture.componentRef.setInput('direction', 'row');
    fixture.componentRef.setInput('wrap', 'wrap');
    fixture.componentRef.setInput('gap', '1.5rem');
    fixture.detectChanges();

    const layout: HTMLElement = fixture.nativeElement.querySelector('.flex');
    expect(layout.style.flexDirection).toBe('row');
    expect(layout.style.flexWrap).toBe('wrap');
    expect(layout.style.gap).toBe('1.5rem');
  });
});
