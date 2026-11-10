import type { Meta, StoryObj } from '@storybook/angular';
import { DialogOverlayComponent } from './dialog.overlay';

type DialogStory = DialogOverlayComponent & { body: string };

const meta: Meta<DialogStory> = {
  title: 'Overlay/Dialog',
  component: DialogOverlayComponent,
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
      '<ngb-dialog-overlay [open]="open" [title]="title">{{ body }}</ngb-dialog-overlay>',
  }),
};

export default meta;
type Story = StoryObj<DialogStory>;

export const Default: Story = {};
export const Closed: Story = { args: { open: false } };
