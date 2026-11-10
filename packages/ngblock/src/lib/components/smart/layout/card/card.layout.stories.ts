import type { Meta, StoryObj } from '@storybook/angular';
import { CardLayoutSmartComponent } from './card.layout.smart';

type CardStory = CardLayoutSmartComponent & { description: string };

const meta: Meta<CardStory> = {
  title: 'Smart/Layout/Card',
  component: CardLayoutSmartComponent,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
  },
  args: { title: 'Profile', description: 'Manage your personal information.' },
  render: (args) => ({
    props: args,
    template:
      '<ngb-card-layout-smart [title]="title">{{ description }}</ngb-card-layout-smart>',
  }),
};

export default meta;
type Story = StoryObj<CardStory>;

export const Default: Story = {};
