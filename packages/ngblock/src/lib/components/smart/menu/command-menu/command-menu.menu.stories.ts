import type { Meta, StoryObj } from '@storybook/angular';
import { CommandMenuSmartComponent } from './command-menu.menu.smart';

const meta: Meta<CommandMenuSmartComponent> = {
  title: 'Smart/Menu/Command menu',
  component: CommandMenuSmartComponent,
  tags: ['autodocs'],
  args: {
    items: [
      { label: 'Create project', description: 'Start a new workspace project' },
      { label: 'Open settings', description: 'Manage your preferences' },
      { label: 'Invite a teammate' },
    ],
  },
};
export default meta;
type Story = StoryObj<CommandMenuSmartComponent>;
export const Default: Story = {};
