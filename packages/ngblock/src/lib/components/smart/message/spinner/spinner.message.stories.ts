import type { Meta, StoryObj } from '@storybook/angular';
import { SpinnerMessageSmartComponent } from './spinner.message.smart';

const meta: Meta<SpinnerMessageSmartComponent> = {
  title: 'Smart/Message/Spinner',
  component: SpinnerMessageSmartComponent,
  tags: ['autodocs'],
  args: { label: 'Loading results' },
  argTypes: { label: { control: 'text' } },
};
export default meta;
type Story = StoryObj<SpinnerMessageSmartComponent>;
export const Default: Story = {};
