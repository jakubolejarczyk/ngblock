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
