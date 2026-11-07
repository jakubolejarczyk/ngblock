import type { Meta, StoryObj } from '@storybook/angular';
import type { CarouselSlide } from './carousel.data';
import { CarouselDataComponent } from './carousel.data';

type CarouselStory = CarouselDataComponent & {
  slides: readonly CarouselSlide[];
};
const meta: Meta<CarouselStory> = {
  title: 'Data/Carousel',
  component: CarouselDataComponent,
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
    template: '<ngb-carousel-data [slides]="slides" />',
  }),
};
export default meta;
type Story = StoryObj<CarouselStory>;
export const Default: Story = {};
