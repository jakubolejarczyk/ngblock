import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonIconSmartComponent } from './button-icon.control.smart';
import { BUTTON_ICONS } from '../../../../dumb/control/button/button-icon/button-icon.control';

type ButtonIconStory = ButtonIconSmartComponent;

const meta: Meta<ButtonIconStory> = {
  title: 'Smart/Control/Button/Icon',
  component: ButtonIconSmartComponent,
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
      '<ngb-button-icon-control-smart [icon]="icon" [ariaLabel]="ariaLabel" [type]="type" [disabled]="disabled"></ngb-button-icon-control-smart>',
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
