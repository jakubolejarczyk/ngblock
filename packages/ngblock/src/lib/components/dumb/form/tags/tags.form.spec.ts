import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { TagsFormComponent } from './tags.form';

describe('TagsFormComponent', () => {
  let fixture: ComponentFixture<TagsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagsFormComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(TagsFormComponent);
    fixture.componentRef.setInput('label', 'Skills');
    fixture.componentRef.setInput('value', ['Angular']);
    fixture.detectChanges();
  });

  it('adds a trimmed value when Enter is pressed', () => {
    const emit = vi.spyOn(fixture.componentInstance.changed, 'emit');
    const input = fixture.nativeElement.querySelector(
      'input',
    ) as HTMLInputElement;
    input.value = ' TypeScript ';
    input.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }),
    );
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Angular');
    expect(input.value).toBe('');
    expect(emit).toHaveBeenCalledWith(['Angular', 'TypeScript']);
  });

  it('removes a value through its remove control', () => {
    const emit = vi.spyOn(fixture.componentInstance.changed, 'emit');
    fixture.nativeElement.querySelector('button').click();
    expect(emit).toHaveBeenCalledWith([]);
  });
});
