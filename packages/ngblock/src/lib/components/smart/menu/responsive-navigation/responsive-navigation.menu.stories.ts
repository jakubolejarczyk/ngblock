import type { Meta, StoryObj } from '@storybook/angular';
import { ResponsiveNavigationMenuSmartComponent } from './responsive-navigation.menu.smart';

const meta: Meta<ResponsiveNavigationMenuSmartComponent> = {
  title: 'Smart/Menu/Responsive Navigation',
  component: ResponsiveNavigationMenuSmartComponent,
  tags: ['autodocs'],
  args: {
    label: 'Main navigation',
    menuLabel: 'Menu',
    items: [
      { label: 'Components', href: '#components' },
      { label: 'Documentation', href: '#documentation' },
      { label: 'Examples', href: '#examples' },
    ],
  },
};

export default meta;
type Story = StoryObj<ResponsiveNavigationMenuSmartComponent>;

export const Default: Story = {};
