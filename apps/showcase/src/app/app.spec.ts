import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('renders the component showcase', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Build interfaces with ngblock',
    );
    expect(compiled.querySelector('ngb-table-data')).not.toBeNull();
    expect(compiled.querySelector('ngb-text-field-form')).not.toBeNull();
    expect(compiled.querySelector('ngb-form-field-form-smart')).not.toBeNull();
    expect(
      compiled.querySelector('ngb-date-range-picker-form-smart'),
    ).not.toBeNull();
    expect(compiled.querySelector('ngb-time-picker-form-smart')).not.toBeNull();
    expect(compiled.querySelector('ngb-context-menu-smart')).not.toBeNull();
    expect(compiled.querySelectorAll('ngb-grid-layout').length).toBeGreaterThan(
      0,
    );
    expect(
      compiled.querySelector('ngb-responsive-navigation-menu-smart'),
    ).not.toBeNull();
  });

  it('updates the date range and context-menu action', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const dateInputs = compiled.querySelectorAll<HTMLInputElement>(
      'ngb-date-range-picker-form-smart input',
    );
    dateInputs[1].value = '2026-11-18';
    dateInputs[1].dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(compiled.textContent).toContain('2026-11-10 – 2026-11-18');

    const contextMenu = compiled.querySelector('ngb-context-menu-smart');
    contextMenu?.querySelector('button')?.click();
    fixture.detectChanges();
    contextMenu?.querySelector('[role="menuitem"]')?.dispatchEvent(
      new MouseEvent('click', { bubbles: true }),
    );
    fixture.detectChanges();
    expect(compiled.textContent).toContain('Last action: Edit project');
  });

  it('opens the responsive navigation menu', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const navigation = compiled.querySelector(
      'ngb-responsive-navigation-menu-smart',
    );
    const toggle =
      navigation?.querySelector<HTMLButtonElement>('.menu-toggle');

    expect(navigation?.querySelectorAll('a').length).toBe(4);
    expect(toggle?.getAttribute('aria-expanded')).toBe('false');
    toggle?.click();
    fixture.detectChanges();
    expect(toggle?.getAttribute('aria-expanded')).toBe('true');
  });

  it('switches the scoped CSS variable palette', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const shell = compiled.querySelector('.showcase-shell');
    const toggle = compiled.querySelector<HTMLButtonElement>(
      '.theme-toggle button',
    );

    expect(shell?.getAttribute('data-theme')).toBe('default');
    expect(toggle).not.toBeNull();
    toggle?.click();
    fixture.detectChanges();

    expect(shell?.getAttribute('data-theme')).toBe('ocean');
    toggle?.click();
    fixture.detectChanges();

    expect(shell?.getAttribute('data-theme')).toBe('default');
  });
});
