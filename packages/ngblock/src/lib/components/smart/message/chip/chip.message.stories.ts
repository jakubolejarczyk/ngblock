import type { Meta, StoryObj } from '@storybook/angular';
import { ChipMessageSmartComponent } from './chip.message.smart';

const meta: Meta<ChipMessageSmartComponent> = {
  title: 'Smart/Message/Chip',
  component: ChipMessageSmartComponent,
  tags: ['autodocs'],
  args: { label: 'Design', removable: true },
};
export default meta;
type Story = StoryObj<ChipMessageSmartComponent>;
export const Default: Story = {};
export const Static: Story = { args: { removable: false } };
