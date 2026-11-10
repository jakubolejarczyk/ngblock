import type { Meta, StoryObj } from '@storybook/angular';
import { TextareaFormComponent } from './textarea.form';

const meta: Meta<TextareaFormComponent> = {
  title: 'Form/Textarea',
  component: TextareaFormComponent,
  tags: ['autodocs'],
  args: {
    label: 'Description',
    value: '',
    rows: 4,
    placeholder: 'Tell us more...',
  },
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    rows: { control: 'number' },
    placeholder: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj<TextareaFormComponent>;
export const Default: Story = {};
