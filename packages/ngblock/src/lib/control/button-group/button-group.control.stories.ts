import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonGroupComponent } from './button-group.control';

const meta: Meta<ButtonGroupComponent> = {
  title: 'Control/Button Group',
  component: ButtonGroupComponent,
  tags: ['autodocs'],
  args: { label: 'Text formatting' },
  render: (args) => ({
    props: args,
    template:
      '<ngb-button-group-control [label]="label"><button type="button">Bold</button><button type="button">Italic</button><button type="button">Underline</button></ngb-button-group-control>',
  }),
};
export default meta;
type Story = StoryObj<ButtonGroupComponent>;
export const Default: Story = {};
