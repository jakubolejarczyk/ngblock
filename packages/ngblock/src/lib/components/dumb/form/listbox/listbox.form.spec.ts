import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListboxFormComponent } from './listbox.form';

describe('ListboxFormComponent', () => {
  let fixture: ComponentFixture<ListboxFormComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListboxFormComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ListboxFormComponent);
    fixture.componentRef.setInput('label', 'Workspace');
    fixture.componentRef.setInput('options', [
      { label: 'Design', value: 'design' },
    ]);
  });

  it('uses a native listbox and selects the bound value', () => {
    fixture.componentRef.setInput('value', 'design');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('select').value).toBe('design');
  });
});
