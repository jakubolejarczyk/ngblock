import type { Meta, StoryObj } from '@storybook/angular';
import { StackLayoutSmartComponent } from './stack.layout.smart';

type StackStory = StackLayoutSmartComponent & { content: string };
const meta: Meta<StackStory> = {
  title: 'Smart/Layout/Stack',
  component: StackLayoutSmartComponent,
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
      '<ngb-stack-layout-smart [direction]="direction" [gap]="gap">{{ content }}</ngb-stack-layout-smart>',
  }),
};
export default meta;
type Story = StoryObj<StackStory>;
export const Vertical: Story = {};
export const Horizontal: Story = { args: { direction: 'horizontal' } };
