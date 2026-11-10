import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonTextComponent } from './button-text.control';

type ButtonTextStory = ButtonTextComponent & { label: string };

const meta: Meta<ButtonTextStory> = {
  title: 'Control/Button/Text',
  component: ButtonTextComponent,
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
      '<ngb-button-text-control [type]="type" [disabled]="disabled">{{ label }}</ngb-button-text-control>',
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
