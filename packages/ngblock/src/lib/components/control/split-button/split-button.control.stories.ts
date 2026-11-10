import type { Meta, StoryObj } from '@storybook/angular';
import type { SplitButtonOption } from './split-button.control';
import { SplitButtonComponent } from './split-button.control';

type SplitButtonStory = SplitButtonComponent & {
  options: readonly SplitButtonOption[];
};
const meta: Meta<SplitButtonStory> = {
  title: 'Control/Split Button',
  component: SplitButtonComponent,
  tags: ['autodocs'],
  args: {
    label: 'Save',
    options: [
      { label: 'Save as draft', value: 'draft' },
      { label: 'Save and close', value: 'close' },
    ],
  },
  render: (args) => ({
    props: args,
    template:
      '<ngb-split-button-control [label]="label" [options]="options" />',
  }),
};
export default meta;
type Story = StoryObj<SplitButtonStory>;
export const Default: Story = {};
