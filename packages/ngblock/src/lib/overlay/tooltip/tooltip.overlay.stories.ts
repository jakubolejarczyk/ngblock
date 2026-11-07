import type { Meta, StoryObj } from '@storybook/angular';
import { TooltipOverlayComponent } from './tooltip.overlay';

type TooltipStory = TooltipOverlayComponent & { label: string };
const meta: Meta<TooltipStory> = {
  title: 'Overlay/Tooltip',
  component: TooltipOverlayComponent,
  tags: ['autodocs'],
  args: { text: 'Helpful hint', label: 'Hover or focus me' },
  argTypes: { text: { control: 'text' }, label: { control: 'text' } },
  render: (args) => ({
    props: args,
    template:
      '<ngb-tooltip-overlay [text]="text">{{ label }}</ngb-tooltip-overlay>',
  }),
};

export default meta;
type Story = StoryObj<TooltipStory>;
export const Default: Story = {};
