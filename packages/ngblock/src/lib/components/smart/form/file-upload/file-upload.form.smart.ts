import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { FileUploadFormComponent } from '../../../dumb/form/file-upload/file-upload.form';
import type { InputValue, OutputValue } from '../../smart-component.types';

@Component({
  selector: 'ngb-file-upload-form-smart',
  imports: [FileUploadFormComponent],
  template: `<ngb-file-upload-form [label]="label()" [accept]="accept()" [multiple]="multiple()" [disabled]="disabled()" (selected)="onSelected($event)"><ng-content /></ngb-file-upload-form>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileUploadFormSmartComponent {
  readonly label = input.required<InputValue<FileUploadFormComponent['label']>>();
  readonly accept = input<InputValue<FileUploadFormComponent['accept']>>('');
  readonly multiple = input<InputValue<FileUploadFormComponent['multiple']>>(false);
  readonly disabled = input<InputValue<FileUploadFormComponent['disabled']>>(false);
  readonly selected = output<OutputValue<FileUploadFormComponent['selected']>>();

  onSelected(value: OutputValue<FileUploadFormComponent['selected']>): void {
    this.selected.emit(value);
  }
}
