import type { Meta, StoryObj } from '@storybook/angular';
import { SliderFormSmartComponent } from './slider.form.smart';

const meta: Meta<SliderFormSmartComponent> = {
  title: 'Smart/Form/Slider',
  component: SliderFormSmartComponent,
  tags: ['autodocs'],
  args: { label: 'Volume', value: 65, min: 0, max: 100, step: 5 },
  argTypes: {
    value: { control: 'number' },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
  },
};
export default meta;
type Story = StoryObj<SliderFormSmartComponent>;
export const Default: Story = {};
