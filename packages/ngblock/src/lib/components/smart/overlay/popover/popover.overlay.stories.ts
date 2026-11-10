import type { Meta, StoryObj } from '@storybook/angular';
import { PopoverOverlaySmartComponent } from './popover.overlay.smart';

type PopoverStory = PopoverOverlaySmartComponent & { content: string };
const meta: Meta<PopoverStory> = {
  title: 'Smart/Overlay/Popover',
  component: PopoverOverlaySmartComponent,
  tags: ['autodocs'],
  args: { label: 'Details', content: 'Additional contextual information.' },
  argTypes: { label: { control: 'text' }, content: { control: 'text' } },
  render: (args) => ({
    props: args,
    template:
      '<ngb-popover-overlay-smart [label]="label">{{ content }}</ngb-popover-overlay-smart>',
  }),
};

export default meta;
type Story = StoryObj<PopoverStory>;
export const Default: Story = {};
