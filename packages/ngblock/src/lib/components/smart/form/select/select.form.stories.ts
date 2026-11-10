import type { Meta, StoryObj } from '@storybook/angular';
import type { SelectOption } from '../../../dumb/form/select/select.form';
import { SelectFormSmartComponent } from './select.form.smart';

type SelectStory = SelectFormSmartComponent & { options: readonly SelectOption[] };
const meta: Meta<SelectStory> = {
  title: 'Smart/Form/Select',
  component: SelectFormSmartComponent,
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
      '<ngb-select-form-smart [label]="label" [options]="options" [value]="value" [required]="required" />',
  }),
};
export default meta;
type Story = StoryObj<SelectStory>;
export const Default: Story = {};
export const Required: Story = { args: { required: true } };
