import type { Meta, StoryObj } from '@storybook/angular';
import { PasswordFormComponent } from './password.form';

const meta: Meta<PasswordFormComponent> = {
  title: 'Form/Password',
  component: PasswordFormComponent,
  tags: ['autodocs'],
  args: { label: 'Password', value: '', placeholder: 'Enter a password' },
};
export default meta;
type Story = StoryObj<PasswordFormComponent>;
export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
