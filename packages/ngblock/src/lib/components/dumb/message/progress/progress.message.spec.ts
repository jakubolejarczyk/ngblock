import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressMessageComponent } from './progress.message';

describe('ProgressMessageComponent', () => {
  let fixture: ComponentFixture<ProgressMessageComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressMessageComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ProgressMessageComponent);
  });

  it('renders an accessible native progress element', () => {
    fixture.componentRef.setInput('value', 30);
    fixture.detectChanges();
    const progress: HTMLProgressElement =
      fixture.nativeElement.querySelector('progress');
    expect(progress.value).toBe(30);
    expect(progress.getAttribute('aria-label')).toBe('Progress');
  });
});
