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
    <ngb-button-text-control (buttonClick)="save($event)">Save</ngb-button-text-control>
    <ngb-button-text-control type="submit" [disabled]="isSaving">Submit</ngb-button-text-control>
  `,
})
export class ExampleComponent {
  isSaving = false;

  save(event: MouseEvent): void {
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
| `buttonClick` | Output | `MouseEvent` | — |

`buttonClick` emits the native click event. The component intentionally uses
the browser's default button styling.
