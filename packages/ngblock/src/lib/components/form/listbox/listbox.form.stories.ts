import type { Meta, StoryObj } from '@storybook/angular';
import type { ListboxOption } from './listbox.form';
import { ListboxFormComponent } from './listbox.form';

type ListboxStory = ListboxFormComponent & {
  options: readonly ListboxOption[];
};
const meta: Meta<ListboxStory> = {
  title: 'Form/Listbox',
  component: ListboxFormComponent,
  tags: ['autodocs'],
  args: {
    label: 'Choose a workspace',
    value: 'design',
    options: [
      { label: 'Design', value: 'design' },
      { label: 'Engineering', value: 'engineering' },
      { label: 'Research', value: 'research' },
    ],
  },
  render: (args) => ({
    props: args,
    template:
      '<ngb-listbox-form [label]="label" [options]="options" [value]="value" />',
  }),
};
export default meta;
type Story = StoryObj<ListboxStory>;
export const Default: Story = {};
