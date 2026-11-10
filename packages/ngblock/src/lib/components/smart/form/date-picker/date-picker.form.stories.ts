import type { Meta, StoryObj } from '@storybook/angular';
import { DatePickerFormSmartComponent } from './date-picker.form.smart';

const meta: Meta<DatePickerFormSmartComponent> = {
  title: 'Smart/Form/Date Picker',
  component: DatePickerFormSmartComponent,
  tags: ['autodocs'],
  args: { label: 'Start date', value: '2026-11-07', min: '', max: '' },
};
export default meta;
type Story = StoryObj<DatePickerFormSmartComponent>;
export const Default: Story = {};
