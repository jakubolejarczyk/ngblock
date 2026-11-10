import type { Meta, StoryObj } from '@storybook/angular';
import { DatePickerFormComponent } from './date-picker.form';

const meta: Meta<DatePickerFormComponent> = {
  title: 'Form/Date Picker',
  component: DatePickerFormComponent,
  tags: ['autodocs'],
  args: { label: 'Start date', value: '2026-11-07', min: '', max: '' },
};
export default meta;
type Story = StoryObj<DatePickerFormComponent>;
export const Default: Story = {};
