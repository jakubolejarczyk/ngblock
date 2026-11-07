import type { Meta, StoryObj } from '@storybook/angular';
import { SpinnerMessageComponent } from './spinner.message';

const meta: Meta<SpinnerMessageComponent> = {
  title: 'Message/Spinner',
  component: SpinnerMessageComponent,
  tags: ['autodocs'],
  args: { label: 'Loading results' },
  argTypes: { label: { control: 'text' } },
};
export default meta;
type Story = StoryObj<SpinnerMessageComponent>;
export const Default: Story = {};
