import type { Meta, StoryObj } from '@storybook/angular';
import type { BreadcrumbItem } from './breadcrumb.menu';
import { BreadcrumbMenuComponent } from './breadcrumb.menu';

type BreadcrumbStory = BreadcrumbMenuComponent & {
  items: readonly BreadcrumbItem[];
};
const meta: Meta<BreadcrumbStory> = {
  title: 'Menu/Breadcrumb',
  component: BreadcrumbMenuComponent,
  tags: ['autodocs'],
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Library', href: '/library' },
      { label: 'Components' },
    ],
  },
  render: (args) => ({
    props: args,
    template: '<ngb-breadcrumb-menu [items]="items" />',
  }),
};
export default meta;
type Story = StoryObj<BreadcrumbStory>;
export const Default: Story = {};
