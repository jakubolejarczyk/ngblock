import type { Meta, StoryObj } from '@storybook/angular';
import type { ListboxOption } from '../../../dumb/form/listbox/listbox.form';
import { ListboxFormSmartComponent } from './listbox.form.smart';

type ListboxStory = ListboxFormSmartComponent & {
  options: readonly ListboxOption[];
};
const meta: Meta<ListboxStory> = {
  title: 'Smart/Form/Listbox',
  component: ListboxFormSmartComponent,
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
      '<ngb-listbox-form-smart [label]="label" [options]="options" [value]="value" />',
  }),
};
export default meta;
type Story = StoryObj<ListboxStory>;
export const Default: Story = {};
