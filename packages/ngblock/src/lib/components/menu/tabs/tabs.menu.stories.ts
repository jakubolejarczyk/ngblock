import type { Meta, StoryObj } from '@storybook/angular';
import type { MenuTab } from './tabs.menu';
import { TabsMenuComponent } from './tabs.menu';

type TabsStory = TabsMenuComponent & { tabs: readonly MenuTab[] };
const meta: Meta<TabsStory> = {
  title: 'Menu/Tabs',
  component: TabsMenuComponent,
  tags: ['autodocs'],
  args: {
    tabs: [
      { id: 'overview', label: 'Overview', content: 'Overview content' },
      { id: 'details', label: 'Details', content: 'Details content' },
    ],
  },
  render: (args) => ({
    props: args,
    template: '<ngb-tabs-menu [tabs]="tabs" />',
  }),
};
export default meta;
type Story = StoryObj<TabsStory>;
export const Default: Story = {};
