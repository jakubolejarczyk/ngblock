import type { Meta, StoryObj } from '@storybook/angular';
import { RatingFormSmartComponent } from './rating.form.smart';

const meta: Meta<RatingFormSmartComponent> = {
  title: 'Smart/Form/Rating',
  component: RatingFormSmartComponent,
  tags: ['autodocs'],
  args: { label: 'Product rating', value: 3, max: 5, disabled: false },
  argTypes: {
    value: { control: 'number' },
    max: { control: 'number' },
    disabled: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<RatingFormSmartComponent>;
export const Default: Story = {};
