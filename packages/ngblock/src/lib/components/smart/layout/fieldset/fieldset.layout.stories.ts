import type { Meta, StoryObj } from '@storybook/angular';
import { FieldsetLayoutSmartComponent } from './fieldset.layout.smart';

const meta: Meta<FieldsetLayoutSmartComponent> = {
  title: 'Smart/Layout/Fieldset',
  component: FieldsetLayoutSmartComponent,
  tags: ['autodocs'],
  args: { legend: 'Contact information' },
};
export default meta;
type Story = StoryObj<FieldsetLayoutSmartComponent>;
export const Default: Story = {};
