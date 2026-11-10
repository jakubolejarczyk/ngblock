import type { Meta, StoryObj } from '@storybook/angular';
import type { SelectOption } from './select.form';
import { SelectFormComponent } from './select.form';

type SelectStory = SelectFormComponent & { options: readonly SelectOption[] };
const meta: Meta<SelectStory> = {
  title: 'Form/Select',
  component: SelectFormComponent,
  tags: ['autodocs'],
  args: {
    label: 'Country',
    value: 'ca',
    options: [
      { label: 'Canada', value: 'ca' },
      { label: 'France', value: 'fr' },
      { label: 'Japan', value: 'jp' },
    ],
  },
  render: (args) => ({
    props: args,
    template:
      '<ngb-select-form [label]="label" [options]="options" [value]="value" [required]="required" />',
  }),
};
export default meta;
type Story = StoryObj<SelectStory>;
export const Default: Story = {};
export const Required: Story = { args: { required: true } };
