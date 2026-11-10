import type { Meta, StoryObj } from '@storybook/angular';
import type { RadioOption } from './radio-group.form';
import { RadioGroupFormComponent } from './radio-group.form';

type RadioStory = RadioGroupFormComponent & { options: readonly RadioOption[] };
const meta: Meta<RadioStory> = {
  title: 'Form/Radio Group',
  component: RadioGroupFormComponent,
  tags: ['autodocs'],
  args: {
    label: 'Plan',
    name: 'plan',
    value: 'basic',
    options: [
      { label: 'Basic', value: 'basic' },
      { label: 'Pro', value: 'pro' },
    ],
  },
  render: (args) => ({
    props: args,
    template:
      '<ngb-radio-group-form [label]="label" [name]="name" [options]="options" [value]="value" />',
  }),
};
export default meta;
type Story = StoryObj<RadioStory>;
export const Default: Story = {};
