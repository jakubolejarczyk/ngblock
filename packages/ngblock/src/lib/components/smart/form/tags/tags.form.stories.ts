import type { Meta, StoryObj } from '@storybook/angular';
import { TagsFormSmartComponent } from './tags.form.smart';

const meta: Meta<TagsFormSmartComponent> = {
  title: 'Smart/Form/Tags',
  component: TagsFormSmartComponent,
  tags: ['autodocs'],
  args: { label: 'Skills', value: ['Angular', 'TypeScript'] },
};
export default meta;
type Story = StoryObj<TagsFormSmartComponent>;
export const Default: Story = {};
