import type { Meta, StoryObj } from '@storybook/angular';
import { AlertMessageSmartComponent } from './alert.message.smart';
import type { AlertType } from '../../../dumb/message/alert/alert.message';

type AlertStory = AlertMessageSmartComponent & { message: string };

const meta: Meta<AlertStory> = {
  title: 'Smart/Message/Alert',
  component: AlertMessageSmartComponent,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
    message: { control: 'text' },
  },
  args: { type: 'info', message: 'This is an informational message.' },
  render: (args) => ({
    props: args,
    template:
      '<ngb-alert-message-smart [type]="type">{{ message }}</ngb-alert-message-smart>',
  }),
};

export default meta;
type Story = StoryObj<AlertStory>;

export const Information: Story = {};
export const Success: Story = {
  args: { type: 'success' as AlertType, message: 'Your changes were saved.' },
};
export const Warning: Story = {
  args: {
    type: 'warning' as AlertType,
    message: 'Check the information provided.',
  },
};
export const Error: Story = {
  args: { type: 'error' as AlertType, message: 'Something went wrong.' },
};
