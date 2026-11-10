import type { Meta, StoryObj } from '@storybook/angular';
import type { CarouselSlide } from '../../../dumb/data/carousel/carousel.data';
import { CarouselDataSmartComponent } from './carousel.data.smart';

type CarouselStory = CarouselDataSmartComponent & {
  slides: readonly CarouselSlide[];
};
const meta: Meta<CarouselStory> = {
  title: 'Smart/Data/Carousel',
  component: CarouselDataSmartComponent,
  tags: ['autodocs'],
  args: {
    slides: [
      { title: 'Design systems', description: 'Build consistent interfaces.' },
      {
        title: 'Accessible UI',
        description: 'Make products work for everyone.',
      },
      {
        title: 'Angular components',
        description: 'Compose reusable building blocks.',
      },
    ],
  },
  render: (args) => ({
    props: args,
    template: '<ngb-carousel-data-smart [slides]="slides" />',
  }),
};
export default meta;
type Story = StoryObj<CarouselStory>;
export const Default: Story = {};
