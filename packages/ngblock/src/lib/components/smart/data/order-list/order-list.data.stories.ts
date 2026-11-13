import type { Meta, StoryObj } from '@storybook/angular';
import { OrderListDataSmartComponent } from './order-list.data.smart';

const meta: Meta<OrderListDataSmartComponent> = {
  title: 'Smart/Data/Order list',
  component: OrderListDataSmartComponent,
  tags: ['autodocs'],
  args: { items: ['Planning', 'Design', 'Development'] },
};
export default meta;
type Story = StoryObj<OrderListDataSmartComponent>;
export const Default: Story = {};
