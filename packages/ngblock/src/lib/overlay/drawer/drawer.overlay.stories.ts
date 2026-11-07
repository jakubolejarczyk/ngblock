import type { Meta, StoryObj } from '@storybook/angular';
import { DrawerOverlayComponent } from './drawer.overlay';

type DrawerStory = DrawerOverlayComponent & { content: string };

const meta: Meta<DrawerStory> = {
  title: 'Overlay/Drawer',
  component: DrawerOverlayComponent,
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
      '<ngb-drawer-overlay [open]="open" [title]="title" [side]="side">{{ content }}</ngb-drawer-overlay>',
  }),
};

export default meta;
type Story = StoryObj<DrawerStory>;
export const Default: Story = {};
export const Closed: Story = { args: { open: false } };
