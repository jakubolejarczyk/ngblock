import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimelineDataComponent } from './timeline.data';

describe('TimelineDataComponent', () => {
  let fixture: ComponentFixture<TimelineDataComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineDataComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(TimelineDataComponent);
    fixture.componentRef.setInput('events', [
      { title: 'Created', date: 'Today' },
      { title: 'Updated' },
    ]);
  });

  it('renders events in chronological list markup', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('li').length).toBe(2);
    expect(fixture.nativeElement.querySelector('time').textContent).toBe(
      'Today',
    );
  });
});
