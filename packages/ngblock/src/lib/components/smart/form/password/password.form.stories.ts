import type { Meta, StoryObj } from '@storybook/angular';
import { PasswordFormSmartComponent } from './password.form.smart';

const meta: Meta<PasswordFormSmartComponent> = {
  title: 'Smart/Form/Password',
  component: PasswordFormSmartComponent,
  tags: ['autodocs'],
  args: { label: 'Password', value: '', placeholder: 'Enter a password' },
};
export default meta;
type Story = StoryObj<PasswordFormSmartComponent>;
export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
