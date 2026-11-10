import type { Meta, StoryObj } from '@storybook/angular';
import { LinkSmartComponent } from './link.control.smart';

type LinkStory = LinkSmartComponent & { label: string };
const meta: Meta<LinkStory> = {
  title: 'Smart/Control/Link',
  component: LinkSmartComponent,
  tags: ['autodocs'],
  args: {
    href: 'https://angular.dev',
    external: true,
    label: 'Angular documentation',
  },
  argTypes: {
    href: { control: 'text' },
    external: { control: 'boolean' },
    label: { control: 'text' },
  },
  render: (args) => ({
    props: args,
    template:
      '<ngb-link-control-smart [href]="href" [external]="external">{{ label }}</ngb-link-control-smart>',
  }),
};
export default meta;
type Story = StoryObj<LinkStory>;
export const Default: Story = {};
