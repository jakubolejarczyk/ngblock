import type { Meta, StoryObj } from '@storybook/angular';
import { ConfirmDialogOverlaySmartComponent } from './confirm-dialog.overlay.smart';

const meta: Meta<ConfirmDialogOverlaySmartComponent> = {
  title: 'Smart/Overlay/Confirm Dialog',
  component: ConfirmDialogOverlaySmartComponent,
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
type Story = StoryObj<ConfirmDialogOverlaySmartComponent>;
export const Default: Story = {};
export const Closed: Story = { args: { open: false } };
