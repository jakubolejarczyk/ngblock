import type { Meta, StoryObj } from '@storybook/angular';
import { CardLayoutComponent } from './card.layout';

type CardStory = CardLayoutComponent & { description: string };

const meta: Meta<CardStory> = {
  title: 'Layout/Card',
  component: CardLayoutComponent,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
  },
  args: { title: 'Profile', description: 'Manage your personal information.' },
  render: (args) => ({
    props: args,
    template:
      '<ngb-card-layout [title]="title">{{ description }}</ngb-card-layout>',
  }),
};

export default meta;
type Story = StoryObj<CardStory>;

export const Default: Story = {};
