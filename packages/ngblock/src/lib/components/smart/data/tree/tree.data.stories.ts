import type { Meta, StoryObj } from '@storybook/angular';
import type { TreeNode } from '../../../dumb/data/tree/tree.data';
import { TreeDataSmartComponent } from './tree.data.smart';

type TreeStory = TreeDataSmartComponent & { nodes: readonly TreeNode[] };
const meta: Meta<TreeStory> = {
  title: 'Smart/Data/Tree',
  component: TreeDataSmartComponent,
  tags: ['autodocs'],
  args: {
    nodes: [
      {
        label: 'Applications',
        children: [{ label: 'Dashboard' }, { label: 'Settings' }],
      },
      {
        label: 'Design system',
        children: [{ label: 'Components' }, { label: 'Tokens' }],
      },
      { label: 'Documentation' },
    ],
  },
  render: (args) => ({
    props: args,
    template: '<ngb-tree-data-smart [nodes]="nodes" />',
  }),
};
export default meta;
type Story = StoryObj<TreeStory>;
export const Default: Story = {};
