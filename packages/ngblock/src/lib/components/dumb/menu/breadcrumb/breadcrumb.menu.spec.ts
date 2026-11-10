import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BreadcrumbMenuComponent } from './breadcrumb.menu';

describe('BreadcrumbMenuComponent', () => {
  let fixture: ComponentFixture<BreadcrumbMenuComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcrumbMenuComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(BreadcrumbMenuComponent);
    fixture.componentRef.setInput('items', [
      { label: 'Home', href: '/' },
      { label: 'Here' },
    ]);
  });

  it('marks the current page and renders ancestor links', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('li').length).toBe(2);
    expect(
      fixture.nativeElement.querySelector('[aria-current="page"]').textContent,
    ).toBe('Here');
    expect(fixture.nativeElement.querySelector('a').getAttribute('href')).toBe(
      '/',
    );
  });
});
