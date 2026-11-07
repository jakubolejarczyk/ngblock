import type { Meta, StoryObj } from '@storybook/angular';
import { EmptyStateDataComponent } from './empty-state.data';

const meta: Meta<EmptyStateDataComponent> = {
  title: 'Data/Empty State',
  component: EmptyStateDataComponent,
  tags: ['autodocs'],
  args: {
    title: 'No projects yet',
    description: 'Create a project to see it listed here.',
  },
};
export default meta;
type Story = StoryObj<EmptyStateDataComponent>;
export const Default: Story = {};
