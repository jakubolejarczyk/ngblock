import type { Meta, StoryObj } from '@storybook/angular';
import type { DataColumn, DataRow } from '../../../dumb/data/table/table.data';
import { TableDataSmartComponent } from './table.data.smart';

type TableStory = TableDataSmartComponent & {
  columns: readonly DataColumn[];
  rows: readonly DataRow[];
};

const meta: Meta<TableStory> = {
  title: 'Smart/Data/Table',
  component: TableDataSmartComponent,
  tags: ['autodocs'],
  args: {
    caption: 'Team members',
    columns: [
      { key: 'name', header: 'Name' },
      { key: 'role', header: 'Role' },
      { key: 'projects', header: 'Projects' },
    ],
    rows: [
      { name: 'Avery', role: 'Designer', projects: 4 },
      { name: 'Jordan', role: 'Engineer', projects: 7 },
    ],
  },
  render: (args) => ({
    props: args,
    template:
      '<ngb-table-data-smart [caption]="caption" [columns]="columns" [rows]="rows" />',
  }),
};

export default meta;
type Story = StoryObj<TableStory>;

export const Default: Story = {};
export const Empty: Story = { args: { rows: [] } };
