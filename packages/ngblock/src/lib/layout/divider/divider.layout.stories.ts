import type { Meta, StoryObj } from '@storybook/angular';
import { DividerLayoutComponent } from './divider.layout';

const meta: Meta<DividerLayoutComponent> = {
  title: 'Layout/Divider',
  component: DividerLayoutComponent,
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
type Story = StoryObj<DividerLayoutComponent>;
export const Horizontal: Story = {};
