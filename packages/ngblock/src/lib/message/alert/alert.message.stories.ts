import type { Meta, StoryObj } from '@storybook/angular';
import { AlertMessageComponent, type AlertType } from './alert.message';

type AlertStory = AlertMessageComponent & { message: string };

const meta: Meta<AlertStory> = {
  title: 'Message/Alert',
  component: AlertMessageComponent,
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
      '<ngb-alert-message [type]="type">{{ message }}</ngb-alert-message>',
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
