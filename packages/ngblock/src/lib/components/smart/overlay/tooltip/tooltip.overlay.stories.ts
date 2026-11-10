import type { Meta, StoryObj } from '@storybook/angular';
import { TooltipOverlaySmartComponent } from './tooltip.overlay.smart';

type TooltipStory = TooltipOverlaySmartComponent & { label: string };
const meta: Meta<TooltipStory> = {
  title: 'Smart/Overlay/Tooltip',
  component: TooltipOverlaySmartComponent,
  tags: ['autodocs'],
  args: { text: 'Helpful hint', label: 'Hover or focus me' },
  argTypes: { text: { control: 'text' }, label: { control: 'text' } },
  render: (args) => ({
    props: args,
    template:
      '<ngb-tooltip-overlay-smart [text]="text">{{ label }}</ngb-tooltip-overlay-smart>',
  }),
};

export default meta;
type Story = StoryObj<TooltipStory>;
export const Default: Story = {};
