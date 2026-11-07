import type { Meta, StoryObj } from '@storybook/angular';
import { ToolbarLayoutComponent } from './toolbar.layout';

const meta: Meta<ToolbarLayoutComponent> = {
  title: 'Layout/Toolbar',
  component: ToolbarLayoutComponent,
  tags: ['autodocs'],
  args: { label: 'Document actions' },
  render: (args) => ({
    props: args,
    template:
      '<ngb-toolbar-layout [label]="label"><button type="button">Undo</button><button type="button">Redo</button><button type="button">Share</button></ngb-toolbar-layout>',
  }),
};
export default meta;
type Story = StoryObj<ToolbarLayoutComponent>;
export const Default: Story = {};
