import type { Meta, StoryObj } from '@storybook/angular';
import type { RadioOption } from '../../../dumb/form/radio-group/radio-group.form';
import { RadioGroupFormSmartComponent } from './radio-group.form.smart';

type RadioStory = RadioGroupFormSmartComponent & { options: readonly RadioOption[] };
const meta: Meta<RadioStory> = {
  title: 'Smart/Form/Radio Group',
  component: RadioGroupFormSmartComponent,
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
      '<ngb-radio-group-form-smart [label]="label" [name]="name" [options]="options" [value]="value" />',
  }),
};
export default meta;
type Story = StoryObj<RadioStory>;
export const Default: Story = {};
