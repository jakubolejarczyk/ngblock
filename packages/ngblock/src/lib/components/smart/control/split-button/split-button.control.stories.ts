import type { Meta, StoryObj } from '@storybook/angular';
import type { SplitButtonOption } from '../../../dumb/control/split-button/split-button.control';
import { SplitButtonSmartComponent } from './split-button.control.smart';

type SplitButtonStory = SplitButtonSmartComponent & {
  options: readonly SplitButtonOption[];
};
const meta: Meta<SplitButtonStory> = {
  title: 'Smart/Control/Split Button',
  component: SplitButtonSmartComponent,
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
      '<ngb-split-button-control-smart [label]="label" [options]="options" />',
  }),
};
export default meta;
type Story = StoryObj<SplitButtonStory>;
export const Default: Story = {};
