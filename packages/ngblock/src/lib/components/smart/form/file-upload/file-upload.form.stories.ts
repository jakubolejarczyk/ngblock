import type { Meta, StoryObj } from '@storybook/angular';
import { FileUploadFormSmartComponent } from './file-upload.form.smart';

const meta: Meta<FileUploadFormSmartComponent> = {
  title: 'Smart/Form/File Upload',
  component: FileUploadFormSmartComponent,
  tags: ['autodocs'],
  args: { label: 'Attachments', accept: 'image/*,.pdf', multiple: true },
  argTypes: {
    label: { control: 'text' },
    accept: { control: 'text' },
    multiple: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<FileUploadFormSmartComponent>;
export const Default: Story = {};
