import type { Meta, StoryObj } from '@storybook/angular';
import { BUTTON_ICONS, ButtonIconComponent } from './button-icon.control';

type ButtonIconStory = ButtonIconComponent;

const meta: Meta<ButtonIconStory> = {
  title: 'Control/Button/Icon',
  component: ButtonIconComponent,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'select',
      options: Object.keys(BUTTON_ICONS),
      description: 'Selects one of the supported button icons.',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible name for the icon-only button.',
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    icon: 'favorite',
    ariaLabel: 'Add to favorites',
    type: 'button',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template:
      '<ngb-button-icon-control [icon]="icon" [ariaLabel]="ariaLabel" [type]="type" [disabled]="disabled"></ngb-button-icon-control>',
  }),
};

export default meta;
type Story = StoryObj<ButtonIconStory>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
