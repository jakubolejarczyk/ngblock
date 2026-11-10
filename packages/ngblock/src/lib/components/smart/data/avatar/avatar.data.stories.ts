import type { Meta, StoryObj } from '@storybook/angular';
import { AvatarDataSmartComponent } from './avatar.data.smart';

const meta: Meta<AvatarDataSmartComponent> = {
  title: 'Smart/Data/Avatar',
  component: AvatarDataSmartComponent,
  tags: ['autodocs'],
  args: { name: 'Alex Morgan', src: '' },
  argTypes: { name: { control: 'text' }, src: { control: 'text' } },
};
export default meta;
type Story = StoryObj<AvatarDataSmartComponent>;
export const Initials: Story = {};
