import type { Meta, StoryObj } from '@storybook/angular';
import { ImageDataComponent } from './image.data';

const meta: Meta<ImageDataComponent> = {
  title: 'Data/Image',
  component: ImageDataComponent,
  tags: ['autodocs'],
  args: {
    src: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=900',
    alt: 'Sunrise over a mountain valley',
    caption: 'A new day in the mountains.',
  },
};
export default meta;
type Story = StoryObj<ImageDataComponent>;
export const Default: Story = {};
