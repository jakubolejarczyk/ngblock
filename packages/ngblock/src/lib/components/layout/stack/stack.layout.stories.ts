import type { Meta, StoryObj } from '@storybook/angular';
import { StackLayoutComponent } from './stack.layout';

type StackStory = StackLayoutComponent & { content: string };
const meta: Meta<StackStory> = {
  title: 'Layout/Stack',
  component: StackLayoutComponent,
  tags: ['autodocs'],
  args: {
    direction: 'vertical',
    gap: '1rem',
    content: 'First item      Second item      Third item',
  },
  argTypes: {
    direction: { control: 'inline-radio', options: ['horizontal', 'vertical'] },
    gap: { control: 'text' },
    content: { control: 'text' },
  },
  render: (args) => ({
    props: args,
    template:
      '<ngb-stack-layout [direction]="direction" [gap]="gap">{{ content }}</ngb-stack-layout>',
  }),
};
export default meta;
type Story = StoryObj<StackStory>;
export const Vertical: Story = {};
export const Horizontal: Story = { args: { direction: 'horizontal' } };
