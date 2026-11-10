import type { Meta, StoryObj } from '@storybook/angular';
import { ChipMessageComponent } from './chip.message';

const meta: Meta<ChipMessageComponent> = {
  title: 'Message/Chip',
  component: ChipMessageComponent,
  tags: ['autodocs'],
  args: { label: 'Design', removable: true },
};
export default meta;
type Story = StoryObj<ChipMessageComponent>;
export const Default: Story = {};
export const Static: Story = { args: { removable: false } };
