import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinkComponent } from './link.control';

describe('LinkComponent', () => {
  let fixture: ComponentFixture<LinkComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(LinkComponent);
    fixture.componentRef.setInput('href', 'https://example.com');
  });

  it('adds safe target attributes to external links', () => {
    fixture.componentRef.setInput('external', true);
    fixture.detectChanges();
    const anchor: HTMLAnchorElement = fixture.nativeElement.querySelector('a');
    expect(anchor.target).toBe('_blank');
    expect(anchor.rel).toContain('noopener');
  });
});
