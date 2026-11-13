import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { OrderListDataComponent } from './order-list.data';

describe('OrderListDataComponent', () => {
  let fixture: ComponentFixture<OrderListDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderListDataComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(OrderListDataComponent);
    fixture.componentRef.setInput('items', ['One', 'Two']);
    fixture.detectChanges();
  });

  it('emits the reordered items when a row is moved', () => {
    const emit = vi.spyOn(fixture.componentInstance.changed, 'emit');
    fixture.nativeElement.querySelector('[aria-label="Move Two up"]').click();
    expect(emit).toHaveBeenCalledWith(['Two', 'One']);
  });
});
