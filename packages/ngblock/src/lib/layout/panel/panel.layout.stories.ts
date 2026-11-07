import type { Meta, StoryObj } from '@storybook/angular';
import { PanelLayoutComponent } from './panel.layout';

type PanelStory = PanelLayoutComponent & { content: string };
const meta: Meta<PanelStory> = {
  title: 'Layout/Panel',
  component: PanelLayoutComponent,
  tags: ['autodocs'],
  args: {
    title: 'Project details',
    collapsible: true,
    content: 'This panel can be expanded or collapsed.',
  },
  render: (args) => ({
    props: args,
    template:
      '<ngb-panel-layout [title]="title" [collapsible]="collapsible">{{ content }}</ngb-panel-layout>',
  }),
};
export default meta;
type Story = StoryObj<PanelStory>;
export const Default: Story = {};
