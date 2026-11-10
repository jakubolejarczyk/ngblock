import type { Meta, StoryObj } from '@storybook/angular';
import { SwitchFormSmartComponent } from './switch.form.smart';

const meta: Meta<SwitchFormSmartComponent> = {
  title: 'Smart/Form/Switch',
  component: SwitchFormSmartComponent,
  tags: ['autodocs'],
  args: { label: 'Enable notifications', checked: true, disabled: false },
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<SwitchFormSmartComponent>;
export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
