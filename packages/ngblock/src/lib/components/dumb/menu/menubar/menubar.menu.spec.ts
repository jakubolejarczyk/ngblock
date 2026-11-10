import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenubarMenuComponent } from './menubar.menu';

describe('MenubarMenuComponent', () => {
  let fixture: ComponentFixture<MenubarMenuComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenubarMenuComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(MenubarMenuComponent);
    fixture.componentRef.setInput('items', [
      { label: 'Home', href: '/' },
      { label: 'Settings' },
    ]);
  });

  it('renders labelled navigation links and actions', () => {
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector('nav').getAttribute('aria-label'),
    ).toBe('Main menu');
    expect(fixture.nativeElement.querySelectorAll('li').length).toBe(2);
    expect(fixture.nativeElement.querySelector('a').getAttribute('href')).toBe(
      '/',
    );
  });
});
