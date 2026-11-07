import type { Meta, StoryObj } from '@storybook/angular';
import type { MenuBarItem } from './menubar.menu';
import { MenubarMenuComponent } from './menubar.menu';

type MenubarStory = MenubarMenuComponent & { items: readonly MenuBarItem[] };
const meta: Meta<MenubarStory> = {
  title: 'Menu/Menubar',
  component: MenubarMenuComponent,
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
    template: '<ngb-menubar-menu [items]="items" />',
  }),
};
export default meta;
type Story = StoryObj<MenubarStory>;
export const Default: Story = {};
