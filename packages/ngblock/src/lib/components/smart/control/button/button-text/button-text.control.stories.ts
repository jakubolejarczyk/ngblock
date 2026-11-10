import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonTextSmartComponent } from './button-text.control.smart';

type ButtonTextStory = ButtonTextSmartComponent & { label: string };

const meta: Meta<ButtonTextStory> = {
  title: 'Smart/Control/Button/Text',
  component: ButtonTextSmartComponent,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },
    disabled: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
  },
  args: {
    type: 'button',
    disabled: false,
    label: 'Button',
  },
  render: (args) => ({
    props: args,
    template:
      '<ngb-button-text-control-smart [type]="type" [disabled]="disabled">{{ label }}</ngb-button-text-control-smart>',
  }),
};

export default meta;
type Story = StoryObj<ButtonTextStory>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Submit: Story = {
  args: {
    type: 'submit',
    label: 'Submit',
  },
};
