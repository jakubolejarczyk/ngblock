# ngblock

`ngblock` is an Angular UI library. The current release includes a standalone
button control.

## Requirements

- Angular `^22.2.0`

## Install

```bash
npm install ngblock
```

## Button control

Import `ButtonComponent` into the standalone component that uses it:

```ts
import { Component } from '@angular/core';
import { ButtonComponent } from 'ngblock';

@Component({
  selector: 'app-example',
  imports: [ButtonComponent],
  template: `
    <ngb-button (click)="save()">Save</ngb-button>
    <ngb-button type="submit" [disabled]="isSaving">Submit</ngb-button>
  `,
})
export class ExampleComponent {
  isSaving = false;

  save(): void {
    // Perform the save action.
  }
}
```

`ButtonComponent` renders a native `<button>` and projects its content as the
button label. Its selector is `ngb-button`.

| Input | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | Native button type. |
| `disabled` | `boolean` | `false` | Disables the native button. |

The control inherits its font and text color from its context, with basic
padding, border, focus-visible, and disabled styles. Use the native `click`
event to handle activation.

## Develop

From the Nx workspace root:

```bash
npx nx build ngblock
npx nx test ngblock
npx nx lint ngblock
```
