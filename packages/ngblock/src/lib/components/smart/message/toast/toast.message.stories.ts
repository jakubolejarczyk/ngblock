import type { Meta, StoryObj } from '@storybook/angular';
import { ToastMessageSmartComponent } from './toast.message.smart';

type ToastStory = ToastMessageSmartComponent & { message: string };
const meta: Meta<ToastStory> = {
  title: 'Smart/Message/Toast',
  component: ToastMessageSmartComponent,
  tags: ['autodocs'],
  args: {
    title: 'Changes saved',
    type: 'success',
    dismissible: true,
    message: 'Your profile has been updated.',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
    dismissible: { control: 'boolean' },
    message: { control: 'text' },
  },
  render: (args) => ({
    props: args,
    template:
      '<ngb-toast-message-smart [title]="title" [type]="type" [dismissible]="dismissible">{{ message }}</ngb-toast-message-smart>',
  }),
};
export default meta;
type Story = StoryObj<ToastStory>;
export const Default: Story = {};
