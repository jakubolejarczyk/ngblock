import type { Meta, StoryObj } from '@storybook/angular';
import { DataViewDataSmartComponent } from './data-view.data.smart';

const meta: Meta<DataViewDataSmartComponent> = {
  title: 'Smart/Data/Data view',
  component: DataViewDataSmartComponent,
  tags: ['autodocs'],
  args: {
    items: [
      {
        id: 'design',
        title: 'Design system',
        description: 'Shared UI foundations.',
      },
      {
        id: 'accessibility',
        title: 'Accessibility',
        description: 'Inclusive patterns.',
      },
    ],
  },
};
export default meta;
type Story = StoryObj<DataViewDataSmartComponent>;
export const Default: Story = {};
