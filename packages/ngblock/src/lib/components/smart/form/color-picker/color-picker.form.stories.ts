import type { Meta, StoryObj } from '@storybook/angular';
import { ColorPickerFormSmartComponent } from './color-picker.form.smart';

const meta: Meta<ColorPickerFormSmartComponent> = {
  title: 'Smart/Form/Color Picker',
  component: ColorPickerFormSmartComponent,
  tags: ['autodocs'],
  args: { label: 'Accent color', value: '#3b82f6' },
  argTypes: { value: { control: 'color' } },
};
export default meta;
type Story = StoryObj<ColorPickerFormSmartComponent>;
export const Default: Story = {};
