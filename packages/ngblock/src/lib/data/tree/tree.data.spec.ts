import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TreeDataComponent } from './tree.data';

describe('TreeDataComponent', () => {
  let fixture: ComponentFixture<TreeDataComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeDataComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(TreeDataComponent);
    fixture.componentRef.setInput('nodes', [
      { label: 'Parent', children: [{ label: 'Child' }] },
    ]);
  });

  it('renders accessible hierarchical groups', () => {
    fixture.detectChanges();
    expect(
      fixture.nativeElement
        .querySelector('[role="treeitem"]')
        .getAttribute('aria-expanded'),
    ).toBe('true');
    expect(
      fixture.nativeElement.querySelector('[role="group"] [role="treeitem"]')
        .textContent,
    ).toBe('Child');
  });
});
