import type { Meta, StoryObj } from '@storybook/angular';
import { ToggleButtonComponent } from './toggle-button.control';

type ToggleStory = ToggleButtonComponent & { label: string };
const meta: Meta<ToggleStory> = {
  title: 'Control/Toggle Button',
  component: ToggleButtonComponent,
  tags: ['autodocs'],
  args: { pressed: false, disabled: false, label: 'Favorite' },
  render: (args) => ({
    props: args,
    template:
      '<ngb-toggle-button [pressed]="pressed" [disabled]="disabled">{{ label }}</ngb-toggle-button>',
  }),
};
export default meta;
type Story = StoryObj<ToggleStory>;
export const Default: Story = {};
export const Pressed: Story = { args: { pressed: true } };
