import type { Meta, StoryObj } from '@storybook/angular';
import type { MultiSelectOption } from './multi-select.form';
import { MultiSelectFormComponent } from './multi-select.form';

type MultiSelectStory = MultiSelectFormComponent & {
  options: readonly MultiSelectOption[];
};
const meta: Meta<MultiSelectStory> = {
  title: 'Form/Multi Select',
  component: MultiSelectFormComponent,
  tags: ['autodocs'],
  args: {
    label: 'Favorite colors',
    value: ['blue'],
    options: [
      { label: 'Blue', value: 'blue' },
      { label: 'Green', value: 'green' },
      { label: 'Violet', value: 'violet' },
    ],
  },
  render: (args) => ({
    props: args,
    template:
      '<ngb-multi-select-form [label]="label" [options]="options" [value]="value" />',
  }),
};
export default meta;
type Story = StoryObj<MultiSelectStory>;
export const Default: Story = {};
