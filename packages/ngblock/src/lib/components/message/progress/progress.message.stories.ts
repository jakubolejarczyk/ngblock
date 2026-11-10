import type { Meta, StoryObj } from '@storybook/angular';
import { ProgressMessageComponent } from './progress.message';

const meta: Meta<ProgressMessageComponent> = {
  title: 'Message/Progress',
  component: ProgressMessageComponent,
  tags: ['autodocs'],
  args: { value: 65, max: 100, label: 'Upload progress' },
  argTypes: {
    value: { control: { type: 'number', min: 0 } },
    max: { control: { type: 'number', min: 1 } },
    label: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj<ProgressMessageComponent>;
export const Default: Story = {};
