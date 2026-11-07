import type { Meta, StoryObj } from '@storybook/angular';
import { NumberFormComponent } from './number.form';

const meta: Meta<NumberFormComponent> = {
  title: 'Form/Number',
  component: NumberFormComponent,
  tags: ['autodocs'],
  args: { label: 'Quantity', value: 3, min: 0, max: 10, step: 1 },
  argTypes: {
    value: { control: 'number' },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
  },
};
export default meta;
type Story = StoryObj<NumberFormComponent>;
export const Default: Story = {};
