import type { Meta, StoryObj } from '@storybook/angular';
import { AvatarDataComponent } from './avatar.data';

const meta: Meta<AvatarDataComponent> = {
  title: 'Data/Avatar',
  component: AvatarDataComponent,
  tags: ['autodocs'],
  args: { name: 'Alex Morgan', src: '' },
  argTypes: { name: { control: 'text' }, src: { control: 'text' } },
};
export default meta;
type Story = StoryObj<AvatarDataComponent>;
export const Initials: Story = {};
