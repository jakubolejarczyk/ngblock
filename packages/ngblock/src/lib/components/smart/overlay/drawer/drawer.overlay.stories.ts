import type { Meta, StoryObj } from '@storybook/angular';
import { DrawerOverlaySmartComponent } from './drawer.overlay.smart';

type DrawerStory = DrawerOverlaySmartComponent & { content: string };

const meta: Meta<DrawerStory> = {
  title: 'Smart/Overlay/Drawer',
  component: DrawerOverlaySmartComponent,
  tags: ['autodocs'],
  args: {
    open: true,
    title: 'Settings',
    side: 'right',
    content: 'Drawer content',
  },
  argTypes: {
    open: { control: 'boolean' },
    title: { control: 'text' },
    side: { control: 'inline-radio', options: ['left', 'right'] },
    content: { control: 'text' },
  },
  render: (args) => ({
    props: args,
    template:
      '<ngb-drawer-overlay-smart [open]="open" [title]="title" [side]="side">{{ content }}</ngb-drawer-overlay-smart>',
  }),
};

export default meta;
type Story = StoryObj<DrawerStory>;
export const Default: Story = {};
export const Closed: Story = { args: { open: false } };
