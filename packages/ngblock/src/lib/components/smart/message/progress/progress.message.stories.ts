import type { Meta, StoryObj } from '@storybook/angular';
import { ProgressMessageSmartComponent } from './progress.message.smart';

const meta: Meta<ProgressMessageSmartComponent> = {
  title: 'Smart/Message/Progress',
  component: ProgressMessageSmartComponent,
  tags: ['autodocs'],
  args: { value: 65, max: 100, label: 'Upload progress' },
  argTypes: {
    value: { control: { type: 'number', min: 0 } },
    max: { control: { type: 'number', min: 1 } },
    label: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj<ProgressMessageSmartComponent>;
export const Default: Story = {};
