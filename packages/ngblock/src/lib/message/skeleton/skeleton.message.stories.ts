import type { Meta, StoryObj } from '@storybook/angular';
import { SkeletonMessageComponent } from './skeleton.message';

const meta: Meta<SkeletonMessageComponent> = {
  title: 'Message/Skeleton',
  component: SkeletonMessageComponent,
  tags: ['autodocs'],
  args: { lines: 3 },
  argTypes: { lines: { control: { type: 'range', min: 1, max: 8 } } },
};
export default meta;
type Story = StoryObj<SkeletonMessageComponent>;
export const Default: Story = {};
