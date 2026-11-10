import type { Meta, StoryObj } from '@storybook/angular';
import type { MenuTab } from '../../../dumb/menu/tabs/tabs.menu';
import { TabsMenuSmartComponent } from './tabs.menu.smart';

type TabsStory = TabsMenuSmartComponent & { tabs: readonly MenuTab[] };
const meta: Meta<TabsStory> = {
  title: 'Smart/Menu/Tabs',
  component: TabsMenuSmartComponent,
  tags: ['autodocs'],
  args: {
    tabs: [
      { id: 'overview', label: 'Overview', content: 'Overview content' },
      { id: 'details', label: 'Details', content: 'Details content' },
    ],
  },
  render: (args) => ({
    props: args,
    template: '<ngb-tabs-menu-smart [tabs]="tabs" />',
  }),
};
export default meta;
type Story = StoryObj<TabsStory>;
export const Default: Story = {};
