import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button';

type ButtonStory = ButtonComponent & { label: string };

const meta: Meta<ButtonStory> = {
  title: 'Control/Button',
  component: ButtonComponent,
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
      '<ngb-button [type]="type" [disabled]="disabled">{{ label }}</ngb-button>',
  }),
};

export default meta;
type Story = StoryObj<ButtonStory>;

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
