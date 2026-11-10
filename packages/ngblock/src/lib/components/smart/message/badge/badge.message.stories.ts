import type { Meta, StoryObj } from '@storybook/angular';
import { BadgeMessageSmartComponent } from './badge.message.smart';

type BadgeStory = BadgeMessageSmartComponent & { label: string };
const meta: Meta<BadgeStory> = {
  title: 'Smart/Message/Badge',
  component: BadgeMessageSmartComponent,
  tags: ['autodocs'],
  args: { tone: 'neutral', label: 'New' },
  argTypes: {
    tone: {
      control: 'select',
      options: ['neutral', 'success', 'warning', 'danger'],
    },
    label: { control: 'text' },
  },
  render: (args) => ({
    props: args,
    template:
      '<ngb-badge-message-smart [tone]="tone">{{ label }}</ngb-badge-message-smart>',
  }),
};
export default meta;
type Story = StoryObj<BadgeStory>;
export const Default: Story = {};
export const Success: Story = { args: { tone: 'success', label: 'Complete' } };
