import type { Meta, StoryObj } from '@storybook/angular';
import { SpeedDialSmartComponent } from './speed-dial.control.smart';

const meta: Meta<SpeedDialSmartComponent> = {
  title: 'Smart/Control/Speed dial',
  component: SpeedDialSmartComponent,
  tags: ['autodocs'],
  args: {
    actions: [
      { label: 'Create project', value: 'create' },
      { label: 'Invite member', value: 'invite' },
    ],
  },
};
export default meta;
type Story = StoryObj<SpeedDialSmartComponent>;
export const Default: Story = {};
