import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { PaginatorDataComponent } from './paginator.data';

describe('PaginatorDataComponent', () => {
  let fixture: ComponentFixture<PaginatorDataComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginatorDataComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(PaginatorDataComponent);
    fixture.componentRef.setInput('total', 25);
    fixture.componentRef.setInput('pageSize', 10);
  });

  it('emits a valid next page', () => {
    const pageChange = vi.fn();
    fixture.componentInstance.pageChange.subscribe(pageChange);
    fixture.detectChanges();
    fixture.nativeElement.querySelector('[aria-label="Next page"]').click();
    expect(pageChange).toHaveBeenCalledWith(1);
  });

  it('does not navigate outside available pages', () => {
    const pageChange = vi.fn();
    fixture.componentInstance.pageChange.subscribe(pageChange);
    fixture.componentInstance.goTo(3);
    expect(pageChange).not.toHaveBeenCalled();
  });
});
