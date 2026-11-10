import type { Meta, StoryObj } from '@storybook/angular';
import { PaginatorDataSmartComponent } from './paginator.data.smart';

const meta: Meta<PaginatorDataSmartComponent> = {
  title: 'Smart/Data/Paginator',
  component: PaginatorDataSmartComponent,
  tags: ['autodocs'],
  args: { total: 45, pageSize: 10, page: 0 },
  argTypes: {
    total: { control: 'number' },
    pageSize: { control: 'number' },
    page: { control: 'number' },
  },
};
export default meta;
type Story = StoryObj<PaginatorDataSmartComponent>;
export const Default: Story = {};
