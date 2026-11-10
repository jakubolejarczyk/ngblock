import type { Meta, StoryObj } from '@storybook/angular';
import { ContainerLayoutSmartComponent } from './container.layout.smart';

type ContainerStory = ContainerLayoutSmartComponent & { content: string };
const meta: Meta<ContainerStory> = {
  title: 'Smart/Layout/Container',
  component: ContainerLayoutSmartComponent,
  tags: ['autodocs'],
  args: { size: 'large', content: 'Centered responsive content container.' },
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large', 'full'] },
    content: { control: 'text' },
  },
  render: (args) => ({
    props: args,
    template:
      '<ngb-container-layout-smart [size]="size">{{ content }}</ngb-container-layout-smart>',
  }),
};
export default meta;
type Story = StoryObj<ContainerStory>;
export const Default: Story = {};
