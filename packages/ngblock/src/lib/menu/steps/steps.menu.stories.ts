import type { Meta, StoryObj } from '@storybook/angular';
import type { MenuStep } from './steps.menu';
import { StepsMenuComponent } from './steps.menu';

type StepsStory = StepsMenuComponent & { steps: readonly MenuStep[] };
const meta: Meta<StepsStory> = {
  title: 'Menu/Steps',
  component: StepsMenuComponent,
  tags: ['autodocs'],
  args: {
    activeIndex: 1,
    steps: [
      { label: 'Account', description: 'Create your account.' },
      { label: 'Profile', description: 'Add your details.' },
      { label: 'Complete' },
    ],
  },
  render: (args) => ({
    props: args,
    template: '<ngb-steps-menu [steps]="steps" [activeIndex]="activeIndex" />',
  }),
};
export default meta;
type Story = StoryObj<StepsStory>;
export const Default: Story = {};
