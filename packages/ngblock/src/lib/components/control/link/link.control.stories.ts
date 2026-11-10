import type { Meta, StoryObj } from '@storybook/angular';
import { LinkComponent } from './link.control';

type LinkStory = LinkComponent & { label: string };
const meta: Meta<LinkStory> = {
  title: 'Control/Link',
  component: LinkComponent,
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
      '<ngb-link-control [href]="href" [external]="external">{{ label }}</ngb-link-control>',
  }),
};
export default meta;
type Story = StoryObj<LinkStory>;
export const Default: Story = {};
