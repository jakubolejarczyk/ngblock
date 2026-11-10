import type { Meta, StoryObj } from '@storybook/angular';
import { ToastMessageComponent } from './toast.message';

type ToastStory = ToastMessageComponent & { message: string };
const meta: Meta<ToastStory> = {
  title: 'Message/Toast',
  component: ToastMessageComponent,
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
      '<ngb-toast-message [title]="title" [type]="type" [dismissible]="dismissible">{{ message }}</ngb-toast-message>',
  }),
};
export default meta;
type Story = StoryObj<ToastStory>;
export const Default: Story = {};
