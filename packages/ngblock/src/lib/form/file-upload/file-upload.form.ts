import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'ngb-file-upload-form',
  templateUrl: './file-upload.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileUploadFormComponent {
  readonly label = input.required<string>();
  readonly accept = input('');
  readonly multiple = input(false);
  readonly disabled = input(false);
  readonly selected = output<readonly File[]>();

  onChange(event: Event): void {
    this.selected.emit(
      Array.from((event.target as HTMLInputElement).files ?? []),
    );
  }
}
