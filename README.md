# ngblock

An Angular UI component library.

## Components

| Group | Component | Type | Selector |
| --- | --- | --- | --- |
| Control / Button | Button text | `control` | `ngb-button-text-control` |

Component files follow `<component-name>.<type>.<extension>`. For example:
`packages/ngblock/src/lib/control/button/button-text/button-text.control.ts`.

## Use

Install the package and import the standalone component:

```bash
npm install ngblock
```

```ts
import { Component } from '@angular/core';
import { ButtonTextComponent } from 'ngblock';

@Component({
  selector: 'app-example',
  imports: [ButtonTextComponent],
  template: `
    <ngb-button-text-control (buttonClick)="save($event)">Save</ngb-button-text-control>
    <ngb-button-text-control type="submit" [disabled]="isSaving">
      Submit
    </ngb-button-text-control>
  `,
})
export class ExampleComponent {
  isSaving = false;

  save(event: MouseEvent): void {}
}
```

The button projects its text content, supports native `type` and `disabled`
inputs, and emits a `MouseEvent` through `buttonClick`. It uses the browser's
default button styling.

## Develop

```bash
npx nx test ngblock
npx nx lint ngblock
npx nx build ngblock
npx nx storybook ngblock
```

Storybook runs at `http://localhost:4400`. Build its static site with
`npx nx build-storybook ngblock`.
