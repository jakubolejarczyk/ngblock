import type { Meta, StoryObj } from '@storybook/angular';
import type { TreeNode } from './tree.data';
import { TreeDataComponent } from './tree.data';

type TreeStory = TreeDataComponent & { nodes: readonly TreeNode[] };
const meta: Meta<TreeStory> = {
  title: 'Data/Tree',
  component: TreeDataComponent,
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
    template: '<ngb-tree-data [nodes]="nodes" />',
  }),
};
export default meta;
type Story = StoryObj<TreeStory>;
export const Default: Story = {};
