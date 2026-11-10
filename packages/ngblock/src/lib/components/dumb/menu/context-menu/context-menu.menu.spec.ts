import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { ContextMenuComponent } from './context-menu.menu';

describe('ContextMenuComponent', () => {
  let fixture: ComponentFixture<ContextMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContextMenuComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ContextMenuComponent);
    fixture.componentRef.setInput('items', [
      { label: 'Edit' },
      { label: 'Delete', disabled: true },
    ]);
  });

  it('opens the menu and emits an enabled selection', () => {
    const selected = vi.fn();
    fixture.componentInstance.selected.subscribe(selected);
    fixture.detectChanges();
    fixture.nativeElement.querySelector('button').click();
    fixture.detectChanges();
    const [edit, deleteButton] =
      fixture.nativeElement.querySelectorAll('[role="menuitem"]');
    expect(deleteButton.disabled).toBe(true);
    edit.click();
    expect(selected).toHaveBeenCalledWith({ label: 'Edit' });
    expect(fixture.componentInstance.isOpen()).toBe(false);
  });
});
