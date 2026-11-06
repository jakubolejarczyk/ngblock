# ngblock

## Components

| Group | Component | Type | Selector |
| --- | --- | --- | --- |
| Control / Button | Button text | `control` | `ngb-button-text-control` |
| Control / Button | Button icon | `control` | `ngb-button-icon-control` |
| Misc | Icon | `misc` | `ngb-icon` |

The button components are in `src/lib/control/button/`; the icon component is
in `src/lib/misc/icon/`. Component files use the
`<component-name>.<type>.<extension>` naming convention, for example
`button-text.control.ts` and `button-icon.control.ts`.

## Use

```bash
npm install ngblock
```

Import the standalone components you use:

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
    <ngb-button-text-control type="submit" [disabled]="isSaving">Submit</ngb-button-text-control>
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

  save(event: MouseEvent): void {
    // Perform an operation using the click event.
  }

  addToFavorites(event: MouseEvent): void {
    // Perform an operation using the click event.
  }
}
```

`ButtonTextComponent` wraps a native button and projects its text content. It
supports these inputs and output:

| Name | Kind | Type | Default |
| --- | --- | --- | --- |
| `type` | Input | `'button' \| 'submit' \| 'reset'` | `'button'` |
| `disabled` | Input | `boolean` | `false` |
| `clicked` | Output | `MouseEvent` | — |

`clicked` emits the native click event. The component intentionally uses
the browser's default button styling.

### Button icon

The icon button renders one of the supported icons selected through the `icon`
input. TypeScript exposes the `ButtonIcon` union for editor autocomplete:

```html
<ngb-button-icon-control
  icon="favorite"
  ariaLabel="Add to favorites"
  (clicked)="addToFavorites($event)"
/>
```

Available values: `add`, `check`, `close`, `delete`, `edit`, `favorite`,
`home`, `menu`, `remove`, and `search`.

| Name | Kind | Type | Default |
| --- | --- | --- | --- |
| `icon` | Input | `ButtonIcon` | Required |
| `ariaLabel` | Input | `string` | Required |
| `type` | Input | `'button' \| 'submit' \| 'reset'` | `'button'` |
| `disabled` | Input | `boolean` | `false` |
| `clicked` | Output | `MouseEvent` | — |

`ButtonIcon` is exported from `ngblock` and is a union of the available icon
names, so editors can suggest valid values: `add`, `check`, `close`, `delete`,
`edit`, `favorite`, `home`, `menu`, `remove`, and `search`. The icon is hidden
from assistive technology; `ariaLabel` provides the button's accessible name.
The component uses the browser's default button styling.

### Icon

`IconComponent` is also exported from `ngblock` for displaying a glyph directly:

```html
<ngb-icon glyph="★" />
```

| Name | Kind | Type | Default |
| --- | --- | --- | --- |
| `glyph` | Input | `string` | Required |

The glyph is treated as decorative and hidden from assistive technology.
