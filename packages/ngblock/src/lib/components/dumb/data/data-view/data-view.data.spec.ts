import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { DataViewDataComponent } from './data-view.data';

describe('DataViewDataComponent', () => {
  let fixture: ComponentFixture<DataViewDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataViewDataComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(DataViewDataComponent);
    fixture.componentRef.setInput('items', [
      { id: 'one', title: 'First item' },
      { id: 'two', title: 'Second item' },
    ]);
  });

  it('renders items and emits the requested view mode', () => {
    const emit = vi.spyOn(fixture.componentInstance.viewChange, 'emit');
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('li').length).toBe(2);
    fixture.nativeElement.querySelectorAll('button')[1].click();
    expect(emit).toHaveBeenCalledWith('grid');
  });
});
