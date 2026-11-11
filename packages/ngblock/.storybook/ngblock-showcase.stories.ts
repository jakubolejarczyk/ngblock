import type { Meta, StoryObj } from '@storybook/angular';
import { NgblockShowcaseComponent } from './ngblock-showcase.component';

const meta: Meta<NgblockShowcaseComponent> = {
  title: 'Showcase/All Components',
  component: NgblockShowcaseComponent,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<NgblockShowcaseComponent>;

export const AllComponents: Story = {};
