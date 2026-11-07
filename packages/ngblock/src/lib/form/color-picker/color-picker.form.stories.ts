import type { Meta, StoryObj } from '@storybook/angular';
import { ColorPickerFormComponent } from './color-picker.form';

const meta: Meta<ColorPickerFormComponent> = {
  title: 'Form/Color Picker',
  component: ColorPickerFormComponent,
  tags: ['autodocs'],
  args: { label: 'Accent color', value: '#3b82f6' },
  argTypes: { value: { control: 'color' } },
};
export default meta;
type Story = StoryObj<ColorPickerFormComponent>;
export const Default: Story = {};
