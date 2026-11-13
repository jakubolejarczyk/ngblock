import type { Meta, StoryObj } from '@storybook/angular';
import { SelectButtonFormSmartComponent } from './select-button.form.smart';

const meta: Meta<SelectButtonFormSmartComponent> = {
  title: 'Smart/Form/Segmented select',
  component: SelectButtonFormSmartComponent,
  tags: ['autodocs'],
  args: {
    label: 'Display',
    options: [
      { label: 'List', value: 'list' },
      { label: 'Grid', value: 'grid' },
    ],
    value: 'grid',
  },
};
export default meta;
type Story = StoryObj<SelectButtonFormSmartComponent>;
export const Default: Story = {};
