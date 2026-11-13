import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { SplitterLayoutComponent } from './splitter.layout';

describe('SplitterLayoutComponent', () => {
  let fixture: ComponentFixture<SplitterLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SplitterLayoutComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(SplitterLayoutComponent);
    fixture.detectChanges();
  });

  it('uses an accessible range separator and emits its new position', () => {
    const emit = vi.spyOn(fixture.componentInstance.positionChange, 'emit');
    const handle = fixture.nativeElement.querySelector(
      '[role="separator"]',
    ) as HTMLInputElement;
    expect(handle.getAttribute('aria-orientation')).toBe('vertical');
    handle.value = '60';
    handle.dispatchEvent(new Event('input'));
    expect(emit).toHaveBeenCalledWith(60);
  });
});
