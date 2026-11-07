import type { Meta, StoryObj } from '@storybook/angular';
import { AutocompleteFormComponent } from './autocomplete.form';

const meta: Meta<AutocompleteFormComponent> = {
  title: 'Form/Autocomplete',
  component: AutocompleteFormComponent,
  tags: ['autodocs'],
  args: {
    label: 'Framework',
    value: '',
    placeholder: 'Start typing',
    options: ['Angular', 'React', 'Svelte', 'Vue'],
  },
};
export default meta;
type Story = StoryObj<AutocompleteFormComponent>;
export const Default: Story = {};
