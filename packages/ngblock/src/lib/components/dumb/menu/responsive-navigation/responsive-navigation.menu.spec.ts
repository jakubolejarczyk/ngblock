import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResponsiveNavigationMenuComponent } from './responsive-navigation.menu';

describe('ResponsiveNavigationMenuComponent', () => {
  let fixture: ComponentFixture<ResponsiveNavigationMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsiveNavigationMenuComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ResponsiveNavigationMenuComponent);
    fixture.componentRef.setInput('items', [
      { label: 'Components', href: '#components' },
      { label: 'Documentation', href: '#documentation' },
    ]);
  });

  it('renders all links and toggles the mobile menu state', () => {
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelectorAll('nav a').length,
    ).toBe(2);
    const button: HTMLButtonElement =
      fixture.nativeElement.querySelector('.menu-toggle');
    button.click();
    fixture.detectChanges();
    expect(button.getAttribute('aria-expanded')).toBe('true');
    expect(fixture.nativeElement.querySelector('nav').dataset.open).toBe('true');

    const firstLink: HTMLAnchorElement =
      fixture.nativeElement.querySelector('nav a');
    firstLink.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }),
    );
    fixture.detectChanges();
    expect(button.getAttribute('aria-expanded')).toBe('false');
  });
});
