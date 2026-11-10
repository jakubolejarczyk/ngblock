import type { Meta, StoryObj } from '@storybook/angular';
import { SwitchFormComponent } from './switch.form';

const meta: Meta<SwitchFormComponent> = {
  title: 'Form/Switch',
  component: SwitchFormComponent,
  tags: ['autodocs'],
  args: { label: 'Enable notifications', checked: true, disabled: false },
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<SwitchFormComponent>;
export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
