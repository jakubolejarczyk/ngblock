import type { Meta, StoryObj } from '@storybook/angular';
import { DropdownMenuComponent } from './dropdown-menu.menu';

const meta: Meta<DropdownMenuComponent> = {
  title: 'Menu/Dropdown',
  component: DropdownMenuComponent,
  tags: ['autodocs'],
  argTypes: { label: { control: 'text' } },
  args: { label: 'Actions' },
  render: (args) => ({
    props: args,
    template: `
      <ngb-dropdown-menu [label]="label">
        <button role="menuitem" type="button">Edit</button>
        <button role="menuitem" type="button">Duplicate</button>
        <button role="menuitem" type="button">Delete</button>
      </ngb-dropdown-menu>
    `,
  }),
};

export default meta;
type Story = StoryObj<DropdownMenuComponent>;

export const Default: Story = {};
