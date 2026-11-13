import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { CommandMenuComponent } from './command-menu.menu';

describe('CommandMenuComponent', () => {
  let fixture: ComponentFixture<CommandMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommandMenuComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(CommandMenuComponent);
    fixture.componentRef.setInput('items', [
      { label: 'Open settings', description: 'Manage your workspace' },
      { label: 'Create project' },
    ]);
  });

  it('filters commands by label or description', () => {
    fixture.componentRef.setInput('query', 'workspace');
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelectorAll('ul > li button').length,
    ).toBe(1);
    expect(fixture.nativeElement.textContent).toContain('Open settings');
  });

  it('emits the chosen command', () => {
    const emit = vi.spyOn(fixture.componentInstance.selected, 'emit');
    fixture.detectChanges();
    fixture.nativeElement.querySelector('button').click();
    expect(emit).toHaveBeenCalledWith({
      label: 'Open settings',
      description: 'Manage your workspace',
    });
  });
});
