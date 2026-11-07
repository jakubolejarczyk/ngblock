import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DropdownMenuComponent } from './dropdown-menu.menu';

describe('DropdownMenuComponent', () => {
  let fixture: ComponentFixture<DropdownMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownMenuComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(DropdownMenuComponent);
  });

  it('toggles the projected menu and updates its expanded state', () => {
    fixture.detectChanges();
    const trigger: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');
    expect(trigger.getAttribute('aria-expanded')).toBe('false');
    expect(fixture.nativeElement.querySelector('[role="menu"]')).toBeNull();

    trigger.click();
    fixture.detectChanges();
    expect(trigger.getAttribute('aria-expanded')).toBe('true');
    expect(fixture.nativeElement.querySelector('[role="menu"]')).not.toBeNull();
  });
});
