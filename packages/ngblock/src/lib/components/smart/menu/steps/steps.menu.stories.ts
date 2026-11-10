import type { Meta, StoryObj } from '@storybook/angular';
import type { MenuStep } from '../../../dumb/menu/steps/steps.menu';
import { StepsMenuSmartComponent } from './steps.menu.smart';

type StepsStory = StepsMenuSmartComponent & { steps: readonly MenuStep[] };
const meta: Meta<StepsStory> = {
  title: 'Smart/Menu/Steps',
  component: StepsMenuSmartComponent,
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
    template: '<ngb-steps-menu-smart [steps]="steps" [activeIndex]="activeIndex" />',
  }),
};
export default meta;
type Story = StoryObj<StepsStory>;
export const Default: Story = {};
