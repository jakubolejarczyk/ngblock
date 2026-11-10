import type { Meta, StoryObj } from '@storybook/angular';
import { FormFieldFormSmartComponent } from './form-field.form.smart';

const meta: Meta<FormFieldFormSmartComponent> = {
  title: 'Smart/Form/Form Field',
  component: FormFieldFormSmartComponent,
  tags: ['autodocs'],
  args: { label: 'Email', controlId: 'email', hint: 'Use your work address' },
  render: (args) => ({
    props: args,
    template: `
      <ngb-form-field-form-smart [label]="label" [controlId]="controlId" [hint]="hint" [error]="error" [required]="required">
        <input ngbFieldControl [id]="controlId" type="email" />
      </ngb-form-field-form-smart>
    `,
  }),
};

export default meta;
type Story = StoryObj<FormFieldFormSmartComponent>;

export const Default: Story = {};
export const Invalid: Story = { args: { error: 'Email is required' } };
