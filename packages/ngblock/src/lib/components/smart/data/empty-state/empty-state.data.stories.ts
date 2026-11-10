import type { Meta, StoryObj } from '@storybook/angular';
import { EmptyStateDataSmartComponent } from './empty-state.data.smart';

const meta: Meta<EmptyStateDataSmartComponent> = {
  title: 'Smart/Data/Empty State',
  component: EmptyStateDataSmartComponent,
  tags: ['autodocs'],
  args: {
    title: 'No projects yet',
    description: 'Create a project to see it listed here.',
  },
};
export default meta;
type Story = StoryObj<EmptyStateDataSmartComponent>;
export const Default: Story = {};
