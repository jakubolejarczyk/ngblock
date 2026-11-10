import type { Meta, StoryObj } from '@storybook/angular';
import { DividerLayoutSmartComponent } from './divider.layout.smart';

const meta: Meta<DividerLayoutSmartComponent> = {
  title: 'Smart/Layout/Divider',
  component: DividerLayoutSmartComponent,
  tags: ['autodocs'],
  args: { orientation: 'horizontal' },
  argTypes: {
    orientation: {
      control: 'inline-radio',
      options: ['horizontal', 'vertical'],
    },
  },
};
export default meta;
type Story = StoryObj<DividerLayoutSmartComponent>;
export const Horizontal: Story = {};
