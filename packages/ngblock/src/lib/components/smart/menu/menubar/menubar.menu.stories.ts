import type { Meta, StoryObj } from '@storybook/angular';
import type { MenuBarItem } from '../../../dumb/menu/menubar/menubar.menu';
import { MenubarMenuSmartComponent } from './menubar.menu.smart';

type MenubarStory = MenubarMenuSmartComponent & { items: readonly MenuBarItem[] };
const meta: Meta<MenubarStory> = {
  title: 'Smart/Menu/Menubar',
  component: MenubarMenuSmartComponent,
  tags: ['autodocs'],
  args: {
    items: [
      { label: 'Dashboard', href: '#' },
      { label: 'Projects', href: '#projects' },
      { label: 'Settings' },
    ],
  },
  render: (args) => ({
    props: args,
    template: '<ngb-menubar-menu-smart [items]="items" />',
  }),
};
export default meta;
type Story = StoryObj<MenubarStory>;
export const Default: Story = {};
