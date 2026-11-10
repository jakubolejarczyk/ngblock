import type { Meta, StoryObj } from '@storybook/angular';
import type { TimelineEvent } from './timeline.data';
import { TimelineDataComponent } from './timeline.data';

type TimelineStory = TimelineDataComponent & {
  events: readonly TimelineEvent[];
};
const meta: Meta<TimelineStory> = {
  title: 'Data/Timeline',
  component: TimelineDataComponent,
  tags: ['autodocs'],
  args: {
    events: [
      {
        title: 'Project created',
        description: 'The workspace was created.',
        date: 'Today',
      },
      {
        title: 'Design approved',
        description: 'The team approved the first design.',
        date: 'Yesterday',
      },
      {
        title: 'Team invited',
        description: 'Three members joined the project.',
        date: 'Last week',
      },
    ],
  },
  render: (args) => ({
    props: args,
    template: '<ngb-timeline-data [events]="events" />',
  }),
};
export default meta;
type Story = StoryObj<TimelineStory>;
export const Default: Story = {};
