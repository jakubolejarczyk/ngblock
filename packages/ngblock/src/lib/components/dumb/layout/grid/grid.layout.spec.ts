import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GridLayoutComponent } from './grid.layout';

describe('GridLayoutComponent', () => {
  let fixture: ComponentFixture<GridLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridLayoutComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(GridLayoutComponent);
  });

  it('uses auto-fit columns with the configured minimum item width', () => {
    fixture.componentRef.setInput('minItemWidth', '20rem');
    fixture.componentRef.setInput('gap', '2rem');
    fixture.detectChanges();

    const layout: HTMLElement = fixture.nativeElement.querySelector('.grid');
    expect(layout.style.gridTemplateColumns).toContain('auto-fit');
    expect(layout.style.gridTemplateColumns).toContain('20rem');
    expect(layout.style.gap).toBe('2rem');
  });
});
