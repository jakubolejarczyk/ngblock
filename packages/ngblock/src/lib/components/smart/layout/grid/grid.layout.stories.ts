import type { Meta, StoryObj } from '@storybook/angular';
import { GridLayoutSmartComponent } from './grid.layout.smart';

const meta: Meta<GridLayoutSmartComponent> = {
  title: 'Smart/Layout/Grid',
  component: GridLayoutSmartComponent,
  tags: ['autodocs'],
  args: { minItemWidth: '16rem', gap: '1rem' },
  render: (args) => ({
    props: args,
    template: `
      <ngb-grid-layout-smart [minItemWidth]="minItemWidth" [gap]="gap">
        <article class="demo-card">First card</article>
        <article class="demo-card">Second card</article>
        <article class="demo-card">Third card</article>
      </ngb-grid-layout-smart>
    `,
  }),
};

export default meta;
type Story = StoryObj<GridLayoutSmartComponent>;

export const Responsive: Story = {};
export const WideCards: Story = { args: { minItemWidth: '22rem' } };
