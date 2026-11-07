import type { Meta, StoryObj } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.control';

type CheckboxStory = CheckboxComponent & { label: string };

const meta: Meta<CheckboxStory> = {
  title: 'Control/Checkbox',
  component: CheckboxComponent,
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
      '<ngb-checkbox-control [checked]="checked" [disabled]="disabled">{{ label }}</ngb-checkbox-control>',
  }),
};

export default meta;
type Story = StoryObj<CheckboxStory>;

export const Default: Story = {};
export const Checked: Story = { args: { checked: true } };
export const Disabled: Story = { args: { disabled: true } };
