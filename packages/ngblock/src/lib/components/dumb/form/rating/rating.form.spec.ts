import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { RatingFormComponent } from './rating.form';

describe('RatingFormComponent', () => {
  let fixture: ComponentFixture<RatingFormComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingFormComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(RatingFormComponent);
  });

  it('emits the chosen rating from labelled buttons', () => {
    const changed = vi.fn();
    fixture.componentInstance.changed.subscribe(changed);
    fixture.detectChanges();
    fixture.nativeElement.querySelectorAll('button')[3].click();
    expect(changed).toHaveBeenCalledWith(4);
    expect(fixture.nativeElement.querySelectorAll('button').length).toBe(5);
  });
});
