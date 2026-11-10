import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListDataComponent } from './list.data';

describe('ListDataComponent', () => {
  let fixture: ComponentFixture<ListDataComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListDataComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ListDataComponent);
    fixture.componentRef.setInput('items', ['One', 'Two']);
  });

  it('renders an ordered list when requested', () => {
    fixture.componentRef.setInput('ordered', true);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('ol')).not.toBeNull();
    expect(fixture.nativeElement.querySelectorAll('li').length).toBe(2);
  });
});
