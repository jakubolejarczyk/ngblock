import type { Meta, StoryObj } from '@storybook/angular';
import { FlexLayoutSmartComponent } from './flex.layout.smart';

const meta: Meta<FlexLayoutSmartComponent> = {
  title: 'Smart/Layout/Flex',
  component: FlexLayoutSmartComponent,
  tags: ['autodocs'],
  args: { direction: 'row', wrap: 'wrap', gap: '1rem', justify: 'start' },
  render: (args) => ({
    props: args,
    template: `
      <ngb-flex-layout-smart
        [direction]="direction"
        [wrap]="wrap"
        [gap]="gap"
        [justify]="justify"
      >
        <button type="button">First action</button>
        <button type="button">Second action</button>
        <button type="button">Third action</button>
      </ngb-flex-layout-smart>
    `,
  }),
};

export default meta;
type Story = StoryObj<FlexLayoutSmartComponent>;

export const WrappingRow: Story = {};
export const Centered: Story = { args: { justify: 'center' } };
