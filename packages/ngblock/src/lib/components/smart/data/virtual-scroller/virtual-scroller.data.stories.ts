import type { Meta, StoryObj } from '@storybook/angular';
import { VirtualScrollerDataSmartComponent } from './virtual-scroller.data.smart';

const meta: Meta<VirtualScrollerDataSmartComponent> = {
  title: 'Smart/Data/Virtual scroller',
  component: VirtualScrollerDataSmartComponent,
  tags: ['autodocs'],
  args: {
    items: Array.from({ length: 200 }, (_, index) => `Result ${index + 1}`),
  },
};
export default meta;
type Story = StoryObj<VirtualScrollerDataSmartComponent>;
export const Default: Story = {};
