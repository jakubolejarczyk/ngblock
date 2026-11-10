import type { Meta, StoryObj } from '@storybook/angular';
import { ContextMenuSmartComponent } from './context-menu.menu.smart';

const meta: Meta<ContextMenuSmartComponent> = {
  title: 'Smart/Menu/Context Menu',
  component: ContextMenuSmartComponent,
  tags: ['autodocs'],
  args: {
    label: 'More actions',
    items: [{ label: 'Edit' }, { label: 'Duplicate' }, { label: 'Delete' }],
  },
};

export default meta;
type Story = StoryObj<ContextMenuSmartComponent>;

export const Default: Story = {};
export const WithDisabledAction: Story = {
  args: { items: [{ label: 'Edit' }, { label: 'Delete', disabled: true }] },
};
