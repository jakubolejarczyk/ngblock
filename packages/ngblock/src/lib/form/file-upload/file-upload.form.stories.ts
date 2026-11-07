import type { Meta, StoryObj } from '@storybook/angular';
import { FileUploadFormComponent } from './file-upload.form';

const meta: Meta<FileUploadFormComponent> = {
  title: 'Form/File Upload',
  component: FileUploadFormComponent,
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
type Story = StoryObj<FileUploadFormComponent>;
export const Default: Story = {};
