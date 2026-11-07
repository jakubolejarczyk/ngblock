import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface TreeNode {
  readonly label: string;
  readonly children?: readonly TreeNode[];
}

@Component({
  selector: 'ngb-tree-data',
  templateUrl: './tree.data.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeDataComponent {
  readonly nodes = input.required<readonly TreeNode[]>();
}
