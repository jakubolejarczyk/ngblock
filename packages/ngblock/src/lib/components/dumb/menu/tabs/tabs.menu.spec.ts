import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { TabsMenuComponent } from './tabs.menu';

describe('TabsMenuComponent', () => {
  let fixture: ComponentFixture<TabsMenuComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsMenuComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(TabsMenuComponent);
    fixture.componentRef.setInput('tabs', [
      { id: 'a', label: 'A', content: 'Panel A' },
      { id: 'b', label: 'B', content: 'Panel B' },
    ]);
  });

  it('selects a tab and emits its id', () => {
    const selected = vi.fn();
    fixture.componentInstance.selected.subscribe(selected);
    fixture.detectChanges();
    fixture.nativeElement.querySelectorAll('[role="tab"]')[1].click();
    fixture.detectChanges();
    expect(selected).toHaveBeenCalledWith('b');
    expect(
      fixture.nativeElement.querySelector('[role="tabpanel"]').textContent,
    ).toBe('Panel B');
  });
});
