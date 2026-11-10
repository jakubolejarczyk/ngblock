import type { Meta, StoryObj } from '@storybook/angular';
import { PanelLayoutSmartComponent } from './panel.layout.smart';

type PanelStory = PanelLayoutSmartComponent & { content: string };
const meta: Meta<PanelStory> = {
  title: 'Smart/Layout/Panel',
  component: PanelLayoutSmartComponent,
  tags: ['autodocs'],
  args: {
    title: 'Project details',
    collapsible: true,
    content: 'This panel can be expanded or collapsed.',
  },
  render: (args) => ({
    props: args,
    template:
      '<ngb-panel-layout-smart [title]="title" [collapsible]="collapsible">{{ content }}</ngb-panel-layout-smart>',
  }),
};
export default meta;
type Story = StoryObj<PanelStory>;
export const Default: Story = {};
