import type { Meta, StoryObj } from '@storybook/angular';
import { ToolbarLayoutSmartComponent } from './toolbar.layout.smart';

const meta: Meta<ToolbarLayoutSmartComponent> = {
  title: 'Smart/Layout/Toolbar',
  component: ToolbarLayoutSmartComponent,
  tags: ['autodocs'],
  args: { label: 'Document actions' },
  render: (args) => ({
    props: args,
    template:
      '<ngb-toolbar-layout-smart [label]="label"><button type="button">Undo</button><button type="button">Redo</button><button type="button">Share</button></ngb-toolbar-layout-smart>',
  }),
};
export default meta;
type Story = StoryObj<ToolbarLayoutSmartComponent>;
export const Default: Story = {};
