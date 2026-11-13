import type { Meta, StoryObj } from '@storybook/angular';
import { PickListDataSmartComponent } from './pick-list.data.smart';

const meta: Meta<PickListDataSmartComponent> = {
  title: 'Smart/Data/Pick list',
  component: PickListDataSmartComponent,
  tags: ['autodocs'],
  args: { source: ['Design', 'Engineering', 'Research'], target: ['Product'] },
};
export default meta;
type Story = StoryObj<PickListDataSmartComponent>;
export const Default: Story = {};
