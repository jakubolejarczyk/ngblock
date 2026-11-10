import type { Meta, StoryObj } from '@storybook/angular';
import type { AccordionItem } from '../../../dumb/menu/accordion/accordion.menu';
import { AccordionMenuSmartComponent } from './accordion.menu.smart';

type AccordionStory = AccordionMenuSmartComponent & {
  items: readonly AccordionItem[];
};
const meta: Meta<AccordionStory> = {
  title: 'Smart/Menu/Accordion',
  component: AccordionMenuSmartComponent,
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
    template: '<ngb-accordion-menu-smart [items]="items" />',
  }),
};
export default meta;
type Story = StoryObj<AccordionStory>;
export const Default: Story = {};
