# ngblock

## Components

| Group | Component | Type | Selector |
| --- | --- | --- | --- |
| Control / Button | Button text | `control` | `ngb-button-text-control` |

The component is in `src/lib/control/button/button-text/`. Component files use
the `<component-name>.<type>.<extension>` naming convention, for example
`button-text.control.ts` and `button-text.control.html`.

## Use

```bash
npm install ngblock
```

Import `ButtonTextComponent` into the standalone component that uses it:

```ts
import { Component } from '@angular/core';
import { ButtonTextComponent } from 'ngblock';

@Component({
  selector: 'app-example',
  imports: [ButtonTextComponent],
  template: `
    <ngb-button-text-control (click)="save()">Save</ngb-button-text-control>
    <ngb-button-text-control type="submit" [disabled]="isSaving">Submit</ngb-button-text-control>
  `,
})
export class ExampleComponent {
  isSaving = false;

  save(): void {
    // Perform the save action.
  }
}
```

`ButtonTextComponent` wraps a native button and projects its text content. It
supports native `type` and `disabled` inputs and intentionally uses the
browser's default styling.
