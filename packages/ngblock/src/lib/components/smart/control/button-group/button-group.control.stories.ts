import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonGroupSmartComponent } from './button-group.control.smart';

const meta: Meta<ButtonGroupSmartComponent> = {
  title: 'Smart/Control/Button Group',
  component: ButtonGroupSmartComponent,
  tags: ['autodocs'],
  args: { label: 'Text formatting' },
  render: (args) => ({
    props: args,
    template:
      '<ngb-button-group-control-smart [label]="label"><button type="button">Bold</button><button type="button">Italic</button><button type="button">Underline</button></ngb-button-group-control-smart>',
  }),
};
export default meta;
type Story = StoryObj<ButtonGroupSmartComponent>;
export const Default: Story = {};
