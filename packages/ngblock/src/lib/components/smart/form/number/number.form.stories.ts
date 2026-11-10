import type { Meta, StoryObj } from '@storybook/angular';
import { NumberFormSmartComponent } from './number.form.smart';

const meta: Meta<NumberFormSmartComponent> = {
  title: 'Smart/Form/Number',
  component: NumberFormSmartComponent,
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
type Story = StoryObj<NumberFormSmartComponent>;
export const Default: Story = {};
