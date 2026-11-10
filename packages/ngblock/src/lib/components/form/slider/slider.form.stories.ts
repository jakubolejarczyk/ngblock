import type { Meta, StoryObj } from '@storybook/angular';
import { SliderFormComponent } from './slider.form';

const meta: Meta<SliderFormComponent> = {
  title: 'Form/Slider',
  component: SliderFormComponent,
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
type Story = StoryObj<SliderFormComponent>;
export const Default: Story = {};
