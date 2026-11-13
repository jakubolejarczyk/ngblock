import type { Meta, StoryObj } from '@storybook/angular';
import { SplitterLayoutSmartComponent } from './splitter.layout.smart';

const meta: Meta<SplitterLayoutSmartComponent> = {
  title: 'Smart/Layout/Splitter',
  component: SplitterLayoutSmartComponent,
  tags: ['autodocs'],
  args: { orientation: 'horizontal', position: 50 },
};
export default meta;
type Story = StoryObj<SplitterLayoutSmartComponent>;
export const Default: Story = {};
