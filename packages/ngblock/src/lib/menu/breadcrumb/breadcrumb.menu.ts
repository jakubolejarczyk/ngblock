import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface BreadcrumbItem {
  readonly label: string;
  readonly href?: string;
}

@Component({
  selector: 'ngb-breadcrumb-menu',
  templateUrl: './breadcrumb.menu.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbMenuComponent {
  readonly items = input.required<readonly BreadcrumbItem[]>();
}
