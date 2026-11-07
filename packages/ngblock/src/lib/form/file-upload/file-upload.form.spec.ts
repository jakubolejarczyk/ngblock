import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { FileUploadFormComponent } from './file-upload.form';

describe('FileUploadFormComponent', () => {
  let fixture: ComponentFixture<FileUploadFormComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileUploadFormComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(FileUploadFormComponent);
    fixture.componentRef.setInput('label', 'Attachments');
  });

  it('emits selected files from the native input', () => {
    const selected = vi.fn();
    fixture.componentInstance.selected.subscribe(selected);
    fixture.detectChanges();
    const file = new File(['content'], 'notes.txt', { type: 'text/plain' });
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');
    Object.defineProperty(input, 'files', {
      configurable: true,
      value: [file],
    });
    input.dispatchEvent(new Event('change'));
    expect(selected).toHaveBeenCalledWith([file]);
  });
});
