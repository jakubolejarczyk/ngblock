import type { Meta, StoryObj } from '@storybook/angular';
import { IconSmartComponent } from './icon.component.smart';

const meta: Meta<IconSmartComponent> = {
  title: 'Smart/Misc/Icon',
  component: IconSmartComponent,
  tags: ['autodocs'],
  args: { glyph: '★' },
  argTypes: { glyph: { control: 'text' } },
};

export default meta;
type Story = StoryObj<IconSmartComponent>;
export const Default: Story = {};
