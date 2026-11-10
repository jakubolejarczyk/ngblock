import type { Meta, StoryObj } from '@storybook/angular';
import { ToggleButtonSmartComponent } from './toggle-button.control.smart';

type ToggleStory = ToggleButtonSmartComponent & { label: string };
const meta: Meta<ToggleStory> = {
  title: 'Smart/Control/Toggle Button',
  component: ToggleButtonSmartComponent,
  tags: ['autodocs'],
  args: { pressed: false, disabled: false, label: 'Favorite' },
  render: (args) => ({
    props: args,
    template:
      '<ngb-toggle-button-control-smart [pressed]="pressed" [disabled]="disabled">{{ label }}</ngb-toggle-button-control-smart>',
  }),
};
export default meta;
type Story = StoryObj<ToggleStory>;
export const Default: Story = {};
export const Pressed: Story = { args: { pressed: true } };
