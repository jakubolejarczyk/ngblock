import type { Meta, StoryObj } from '@storybook/angular';
import { AutocompleteFormSmartComponent } from './autocomplete.form.smart';

const meta: Meta<AutocompleteFormSmartComponent> = {
  title: 'Smart/Form/Autocomplete',
  component: AutocompleteFormSmartComponent,
  tags: ['autodocs'],
  args: {
    label: 'Framework',
    value: '',
    placeholder: 'Start typing',
    options: ['Angular', 'React', 'Svelte', 'Vue'],
  },
};
export default meta;
type Story = StoryObj<AutocompleteFormSmartComponent>;
export const Default: Story = {};
