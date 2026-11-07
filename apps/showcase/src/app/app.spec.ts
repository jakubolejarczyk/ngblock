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
});
