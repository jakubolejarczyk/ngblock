import type { Meta, StoryObj } from '@storybook/angular';
import type { AccordionItem } from './accordion.menu';
import { AccordionMenuComponent } from './accordion.menu';

type AccordionStory = AccordionMenuComponent & {
  items: readonly AccordionItem[];
};
const meta: Meta<AccordionStory> = {
  title: 'Menu/Accordion',
  component: AccordionMenuComponent,
  tags: ['autodocs'],
  args: {
    items: [
      {
        title: 'What is ngblock?',
        content: 'A standalone Angular component library.',
      },
      {
        title: 'Is it accessible?',
        content: 'Components use native elements and accessible semantics.',
      },
    ],
  },
  render: (args) => ({
    props: args,
    template: '<ngb-accordion-menu [items]="items" />',
  }),
};
export default meta;
type Story = StoryObj<AccordionStory>;
export const Default: Story = {};
