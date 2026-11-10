import type { Meta, StoryObj } from '@storybook/angular';
import { DialogOverlaySmartComponent } from './dialog.overlay.smart';

type DialogStory = DialogOverlaySmartComponent & { body: string };

const meta: Meta<DialogStory> = {
  title: 'Smart/Overlay/Dialog',
  component: DialogOverlaySmartComponent,
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    title: { control: 'text' },
    body: { control: 'text' },
  },
  args: {
    open: true,
    title: 'Dialog title',
    body: 'Dialog content goes here.',
  },
  render: (args) => ({
    props: args,
    template:
      '<ngb-dialog-overlay-smart [open]="open" [title]="title">{{ body }}</ngb-dialog-overlay-smart>',
  }),
};

export default meta;
type Story = StoryObj<DialogStory>;

export const Default: Story = {};
export const Closed: Story = { args: { open: false } };
