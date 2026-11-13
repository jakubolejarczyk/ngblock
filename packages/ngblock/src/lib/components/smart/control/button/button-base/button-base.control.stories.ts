import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonBaseSmartComponent } from './button-base.control.smart';

const meta: Meta<ButtonBaseSmartComponent> = {
  title: 'Smart/Control/Button/Base',
  component: ButtonBaseSmartComponent,
  tags: ['autodocs'],
  args: { type: 'button', disabled: false, ariaLabel: 'Save changes' },
};
export default meta;
type Story = StoryObj<ButtonBaseSmartComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template:
      '<ngb-button-base-control-smart [type]="type" [disabled]="disabled" [ariaLabel]="ariaLabel">Save changes</ngb-button-base-control-smart>',
  }),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: Default.render,
};
