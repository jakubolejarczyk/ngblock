import type { Meta, StoryObj } from '@storybook/angular';
import { PopoverOverlayComponent } from './popover.overlay';

type PopoverStory = PopoverOverlayComponent & { content: string };
const meta: Meta<PopoverStory> = {
  title: 'Overlay/Popover',
  component: PopoverOverlayComponent,
  tags: ['autodocs'],
  args: { label: 'Details', content: 'Additional contextual information.' },
  argTypes: { label: { control: 'text' }, content: { control: 'text' } },
  render: (args) => ({
    props: args,
    template:
      '<ngb-popover-overlay [label]="label">{{ content }}</ngb-popover-overlay>',
  }),
};

export default meta;
type Story = StoryObj<PopoverStory>;
export const Default: Story = {};
