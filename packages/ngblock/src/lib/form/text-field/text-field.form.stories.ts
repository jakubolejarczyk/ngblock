import type { Meta, StoryObj } from '@storybook/angular';
import { TextFieldFormComponent } from './text-field.form';

const meta: Meta<TextFieldFormComponent> = {
  title: 'Form/Text Field',
  component: TextFieldFormComponent,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'search', 'url'],
    },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
  },
  args: {
    label: 'Email address',
    value: '',
    type: 'email',
    placeholder: 'you@example.com',
    disabled: false,
    required: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <ngb-text-field-form
        [label]="label"
        [value]="value"
        [type]="type"
        [placeholder]="placeholder"
        [disabled]="disabled"
        [required]="required"
      />
    `,
  }),
};

export default meta;
type Story = StoryObj<TextFieldFormComponent>;

export const Default: Story = {};
export const Required: Story = { args: { required: true } };
export const Disabled: Story = {
  args: { disabled: true, value: 'readonly@example.com' },
};
