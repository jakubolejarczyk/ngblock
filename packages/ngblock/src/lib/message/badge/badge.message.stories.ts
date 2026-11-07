import type { Meta, StoryObj } from '@storybook/angular';
import { BadgeMessageComponent } from './badge.message';

type BadgeStory = BadgeMessageComponent & { label: string };
const meta: Meta<BadgeStory> = {
  title: 'Message/Badge',
  component: BadgeMessageComponent,
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
      '<ngb-badge-message [tone]="tone">{{ label }}</ngb-badge-message>',
  }),
};
export default meta;
type Story = StoryObj<BadgeStory>;
export const Default: Story = {};
export const Success: Story = { args: { tone: 'success', label: 'Complete' } };
