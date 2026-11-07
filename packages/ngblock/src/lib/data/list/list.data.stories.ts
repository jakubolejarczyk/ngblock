import type { Meta, StoryObj } from '@storybook/angular';
import { ListDataComponent } from './list.data';

const meta: Meta<ListDataComponent> = {
  title: 'Data/List',
  component: ListDataComponent,
  tags: ['autodocs'],
  args: {
    ordered: false,
    items: ['Design system', 'Accessibility', 'Documentation'],
  },
  argTypes: { ordered: { control: 'boolean' } },
};
export default meta;
type Story = StoryObj<ListDataComponent>;
export const Unordered: Story = {};
export const Ordered: Story = { args: { ordered: true } };
