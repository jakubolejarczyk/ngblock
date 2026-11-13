import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { PickListDataComponent } from './pick-list.data';

describe('PickListDataComponent', () => {
  let fixture: ComponentFixture<PickListDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PickListDataComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(PickListDataComponent);
    fixture.componentRef.setInput('source', ['One', 'Two']);
    fixture.detectChanges();
  });

  it('moves an item between collections and emits both lists', () => {
    const emit = vi.spyOn(fixture.componentInstance.changed, 'emit');
    fixture.nativeElement
      .querySelector('[aria-label="Move One to selected"]')
      .click();
    expect(emit).toHaveBeenCalledWith({ source: ['Two'], target: ['One'] });
  });
});
