import type { Meta, StoryObj } from '@storybook/angular';
import type { MultiSelectOption } from '../../../dumb/form/multi-select/multi-select.form';
import { MultiSelectFormSmartComponent } from './multi-select.form.smart';

type MultiSelectStory = MultiSelectFormSmartComponent & {
  options: readonly MultiSelectOption[];
};
const meta: Meta<MultiSelectStory> = {
  title: 'Smart/Form/Multi Select',
  component: MultiSelectFormSmartComponent,
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
      '<ngb-multi-select-form-smart [label]="label" [options]="options" [value]="value" />',
  }),
};
export default meta;
type Story = StoryObj<MultiSelectStory>;
export const Default: Story = {};
