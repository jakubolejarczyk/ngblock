import type { Meta, StoryObj } from '@storybook/angular';
import { IconComponent } from './icon.component';

const meta: Meta<IconComponent> = {
  title: 'Misc/Icon',
  component: IconComponent,
  tags: ['autodocs'],
  args: { glyph: '★' },
  argTypes: { glyph: { control: 'text' } },
};

export default meta;
type Story = StoryObj<IconComponent>;
export const Default: Story = {};
