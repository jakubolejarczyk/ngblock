import type { Meta, StoryObj } from '@storybook/angular';
import { TimePickerFormSmartComponent } from './time-picker.form.smart';

const meta: Meta<TimePickerFormSmartComponent> = {
  title: 'Smart/Form/Time Picker',
  component: TimePickerFormSmartComponent,
  tags: ['autodocs'],
  args: { label: 'Start time', min: '09:00', max: '17:00' },
  render: (args) => ({
    props: args,
    template: `
      <ngb-time-picker-form-smart
        [label]="label"
        [min]="min"
        [max]="max"
        [disabled]="disabled"
      />
    `,
  }),
};

export default meta;
type Story = StoryObj<TimePickerFormSmartComponent>;

export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
