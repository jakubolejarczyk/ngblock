import type { Meta, StoryObj } from '@storybook/angular';
import { OtpFormSmartComponent } from './otp.form.smart';

const meta: Meta<OtpFormSmartComponent> = {
  title: 'Smart/Form/One-time code',
  component: OtpFormSmartComponent,
  tags: ['autodocs'],
  args: { label: 'Verification code', value: '381204', length: 6 },
};
export default meta;
type Story = StoryObj<OtpFormSmartComponent>;
export const Default: Story = {};
