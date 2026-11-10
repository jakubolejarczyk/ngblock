import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmptyStateDataComponent } from './empty-state.data';

describe('EmptyStateDataComponent', () => {
  let fixture: ComponentFixture<EmptyStateDataComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyStateDataComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(EmptyStateDataComponent);
    fixture.componentRef.setInput('title', 'Nothing here');
  });

  it('announces its empty-state title', () => {
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector('[role="status"] h2').textContent,
    ).toBe('Nothing here');
  });
});
