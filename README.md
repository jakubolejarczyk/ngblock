# ngblock

An Angular UI component library.

## Components

| Group | Component | Type | Selector |
| --- | --- | --- | --- |
| Control / Button | Button text | `control` | `ngb-button-text-control` |
| Control / Button | Button icon | `control` | `ngb-button-icon-control` |
| Misc | Icon | `misc` | `ngb-icon` |

Component files follow `<component-name>.<type>.<extension>`. For example:
`packages/ngblock/src/lib/control/button/button-text/button-text.control.ts`.

## Use

Install the package and import the standalone component:

```bash
npm install ngblock
```

```ts
import { Component } from '@angular/core';
import {
  ButtonIconComponent,
  ButtonTextComponent,
  IconComponent,
} from 'ngblock';

@Component({
  selector: 'app-example',
  imports: [ButtonTextComponent, ButtonIconComponent, IconComponent],
  template: `
    <ngb-button-text-control (clicked)="save($event)">Save</ngb-button-text-control>
    <ngb-button-text-control type="submit" [disabled]="isSaving">
      Submit
    </ngb-button-text-control>
    <ngb-button-icon-control
      icon="favorite"
      ariaLabel="Add to favorites"
      (clicked)="addToFavorites($event)"
    />
    <ngb-icon glyph="★" />
  `,
})
export class ExampleComponent {
  isSaving = false;

  save(event: MouseEvent): void {}
  addToFavorites(event: MouseEvent): void {}
}
```

Both buttons support native `type` and `disabled` inputs and emit the native
`MouseEvent` through the generic `clicked` output. The text button projects its
content; both buttons use the browser's default styling. The icon button takes
a supported icon name via `icon` and an accessible name via `ariaLabel`.
`ButtonIcon` provides editor completions for `add`, `check`, `close`, `delete`,
`edit`, `favorite`, `home`, `menu`, `remove`, and `search`.

`IconComponent` (`ngb-icon`) displays a glyph as decorative content hidden from
assistive technology. Import it when using the icon component directly; supply
a `glyph` string.

## Develop

```bash
npx nx test ngblock
npx nx lint ngblock
npx nx build ngblock
npx nx storybook ngblock
```

Storybook runs at `http://localhost:4400`. Build its static site with
`npx nx build-storybook ngblock`.
