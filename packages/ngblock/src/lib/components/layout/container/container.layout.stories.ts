import type { Meta, StoryObj } from '@storybook/angular';
import { ContainerLayoutComponent } from './container.layout';

type ContainerStory = ContainerLayoutComponent & { content: string };
const meta: Meta<ContainerStory> = {
  title: 'Layout/Container',
  component: ContainerLayoutComponent,
  tags: ['autodocs'],
  args: { size: 'large', content: 'Centered responsive content container.' },
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large', 'full'] },
    content: { control: 'text' },
  },
  render: (args) => ({
    props: args,
    template:
      '<ngb-container-layout [size]="size">{{ content }}</ngb-container-layout>',
  }),
};
export default meta;
type Story = StoryObj<ContainerStory>;
export const Default: Story = {};
