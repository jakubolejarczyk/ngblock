import type { Meta, StoryObj } from '@storybook/angular';
import { TextareaFormSmartComponent } from './textarea.form.smart';

const meta: Meta<TextareaFormSmartComponent> = {
  title: 'Smart/Form/Textarea',
  component: TextareaFormSmartComponent,
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
type Story = StoryObj<TextareaFormSmartComponent>;
export const Default: Story = {};
