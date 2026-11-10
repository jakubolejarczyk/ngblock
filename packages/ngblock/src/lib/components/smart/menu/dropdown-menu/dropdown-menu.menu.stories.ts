import type { Meta, StoryObj } from '@storybook/angular';
import { DropdownMenuSmartComponent } from './dropdown-menu.menu.smart';

const meta: Meta<DropdownMenuSmartComponent> = {
  title: 'Smart/Menu/Dropdown',
  component: DropdownMenuSmartComponent,
  tags: ['autodocs'],
  argTypes: { label: { control: 'text' } },
  args: { label: 'Actions' },
  render: (args) => ({
    props: args,
    template: `
      <ngb-dropdown-menu-smart [label]="label">
        <button role="menuitem" type="button">Edit</button>
        <button role="menuitem" type="button">Duplicate</button>
        <button role="menuitem" type="button">Delete</button>
      </ngb-dropdown-menu-smart>
    `,
  }),
};

export default meta;
type Story = StoryObj<DropdownMenuSmartComponent>;

export const Default: Story = {};
