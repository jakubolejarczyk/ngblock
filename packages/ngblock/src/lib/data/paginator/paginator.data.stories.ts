import type { Meta, StoryObj } from '@storybook/angular';
import { PaginatorDataComponent } from './paginator.data';

const meta: Meta<PaginatorDataComponent> = {
  title: 'Data/Paginator',
  component: PaginatorDataComponent,
  tags: ['autodocs'],
  args: { total: 45, pageSize: 10, page: 0 },
  argTypes: {
    total: { control: 'number' },
    pageSize: { control: 'number' },
    page: { control: 'number' },
  },
};
export default meta;
type Story = StoryObj<PaginatorDataComponent>;
export const Default: Story = {};
