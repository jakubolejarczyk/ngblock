import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToolbarLayoutComponent } from './toolbar.layout';

describe('ToolbarLayoutComponent', () => {
  let fixture: ComponentFixture<ToolbarLayoutComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarLayoutComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ToolbarLayoutComponent);
  });

  it('labels its toolbar region', () => {
    fixture.componentRef.setInput('label', 'Document actions');
    fixture.detectChanges();
    expect(
      fixture.nativeElement
        .querySelector('[role="toolbar"]')
        .getAttribute('aria-label'),
    ).toBe('Document actions');
  });
});
