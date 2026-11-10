import type { Meta, StoryObj } from '@storybook/angular';
import { RatingFormComponent } from './rating.form';

const meta: Meta<RatingFormComponent> = {
  title: 'Form/Rating',
  component: RatingFormComponent,
  tags: ['autodocs'],
  args: { label: 'Product rating', value: 3, max: 5, disabled: false },
  argTypes: {
    value: { control: 'number' },
    max: { control: 'number' },
    disabled: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<RatingFormComponent>;
export const Default: Story = {};
