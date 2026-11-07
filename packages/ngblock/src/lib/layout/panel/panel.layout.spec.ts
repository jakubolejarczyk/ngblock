import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PanelLayoutComponent } from './panel.layout';

describe('PanelLayoutComponent', () => {
  let fixture: ComponentFixture<PanelLayoutComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelLayoutComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(PanelLayoutComponent);
    fixture.componentRef.setInput('title', 'Details');
    fixture.componentRef.setInput('collapsible', true);
  });

  it('collapses its content when requested', () => {
    fixture.detectChanges();
    fixture.nativeElement.querySelector('button').click();
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector('[aria-expanded="false"]'),
    ).not.toBeNull();
    expect(fixture.nativeElement.querySelector('section > div')).toBeNull();
  });
});
