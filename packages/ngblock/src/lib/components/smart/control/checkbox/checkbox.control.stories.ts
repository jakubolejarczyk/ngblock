import type { Meta, StoryObj } from '@storybook/angular';
import { CheckboxSmartComponent } from './checkbox.control.smart';

type CheckboxStory = CheckboxSmartComponent & { label: string };

const meta: Meta<CheckboxStory> = {
  title: 'Smart/Control/Checkbox',
  component: CheckboxSmartComponent,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: { checked: false, disabled: false, label: 'Accept terms' },
  render: (args) => ({
    props: args,
    template:
      '<ngb-checkbox-control-smart [checked]="checked" [disabled]="disabled">{{ label }}</ngb-checkbox-control-smart>',
  }),
};

export default meta;
type Story = StoryObj<CheckboxStory>;

export const Default: Story = {};
export const Checked: Story = { args: { checked: true } };
export const Disabled: Story = { args: { disabled: true } };
