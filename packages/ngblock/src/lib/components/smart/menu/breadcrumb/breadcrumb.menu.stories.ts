import type { Meta, StoryObj } from '@storybook/angular';
import type { BreadcrumbItem } from '../../../dumb/menu/breadcrumb/breadcrumb.menu';
import { BreadcrumbMenuSmartComponent } from './breadcrumb.menu.smart';

type BreadcrumbStory = BreadcrumbMenuSmartComponent & {
  items: readonly BreadcrumbItem[];
};
const meta: Meta<BreadcrumbStory> = {
  title: 'Smart/Menu/Breadcrumb',
  component: BreadcrumbMenuSmartComponent,
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
    template: '<ngb-breadcrumb-menu-smart [items]="items" />',
  }),
};
export default meta;
type Story = StoryObj<BreadcrumbStory>;
export const Default: Story = {};
