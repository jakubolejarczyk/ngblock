import type { Meta, StoryObj } from '@storybook/angular';
import { SkeletonMessageSmartComponent } from './skeleton.message.smart';

const meta: Meta<SkeletonMessageSmartComponent> = {
  title: 'Smart/Message/Skeleton',
  component: SkeletonMessageSmartComponent,
  tags: ['autodocs'],
  args: { lines: 3 },
  argTypes: { lines: { control: { type: 'range', min: 1, max: 8 } } },
};
export default meta;
type Story = StoryObj<SkeletonMessageSmartComponent>;
export const Default: Story = {};
