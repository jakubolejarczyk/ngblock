import type { Meta, StoryObj } from '@storybook/angular';
import { DateRangePickerFormSmartComponent } from './date-range-picker.form.smart';

const meta: Meta<DateRangePickerFormSmartComponent> = {
  title: 'Smart/Form/Date Range Picker',
  component: DateRangePickerFormSmartComponent,
  tags: ['autodocs'],
  args: { label: 'Travel dates', min: '2026-01-01' },
  render: (args) => ({
    props: args,
    template: `
      <ngb-date-range-picker-form-smart
        [label]="label"
        [min]="min"
        [disabled]="disabled"
      />
    `,
  }),
};

export default meta;
type Story = StoryObj<DateRangePickerFormSmartComponent>;

export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
