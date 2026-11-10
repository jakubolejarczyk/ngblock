import type { Meta, StoryObj } from '@storybook/angular';
import { ListDataSmartComponent } from './list.data.smart';

const meta: Meta<ListDataSmartComponent> = {
  title: 'Smart/Data/List',
  component: ListDataSmartComponent,
  tags: ['autodocs'],
  args: {
    ordered: false,
    items: ['Design system', 'Accessibility', 'Documentation'],
  },
  argTypes: { ordered: { control: 'boolean' } },
};
export default meta;
type Story = StoryObj<ListDataSmartComponent>;
export const Unordered: Story = {};
export const Ordered: Story = { args: { ordered: true } };
