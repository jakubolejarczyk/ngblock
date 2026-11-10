import type { Meta, StoryObj } from '@storybook/angular';
import { ConfirmDialogOverlayComponent } from './confirm-dialog.overlay';

const meta: Meta<ConfirmDialogOverlayComponent> = {
  title: 'Overlay/Confirm Dialog',
  component: ConfirmDialogOverlayComponent,
  tags: ['autodocs'],
  args: {
    open: true,
    title: 'Delete project?',
    message: 'This action cannot be undone.',
    confirmLabel: 'Delete',
    cancelLabel: 'Keep project',
  },
};
export default meta;
type Story = StoryObj<ConfirmDialogOverlayComponent>;
export const Default: Story = {};
export const Closed: Story = { args: { open: false } };
