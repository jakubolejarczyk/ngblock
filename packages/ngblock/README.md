# ngblock

An Angular UI library of standalone, native-element-first components. The
library covers common interface building blocks rather than every specialized
widget an application might need; components compose with native HTML and can
be styled by the consuming application.

## Component catalog

| Group   | Components                                                                                                                                                       |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Overlay | Confirmation dialog, dialog, drawer, popover, tooltip                                                                                                            |
| Message | Alert, badge, chip, progress, skeleton, spinner, toast                                                                                                           |
| Menu    | Accordion, breadcrumb, dropdown, menubar, steps, tabs                                                                                                            |
| Layout  | Card, container, divider, panel, stack, toolbar                                                                                                                  |
| Form    | Autocomplete, color picker, date picker, file upload, listbox, multi-select, number, password, radio group, rating, select, slider, switch, text field, textarea |
| Data    | Avatar, carousel, empty state, image, list, paginator, table, timeline, tree                                                                                     |
| Control | Button group, checkbox, icon button, link, split button, text button, toggle button                                                                              |
| Misc    | Icon                                                                                                                                                             |

Components live under `src/lib/<group>/<component>/` and use the
`<component-name>.<type>.<extension>` naming convention. Each component is
exported from the package entry point, has a focused spec, and has Storybook
stories under its source folder.

## Use

Install the package:

```bash
npm install ngblock
```

Add the optional component theme to your Angular application's global styles:

```json
{
  "styles": ["node_modules/ngblock/styles.css", "src/styles.css"]
}
```

The theme is opt-in and styles component hosts and their native controls. It
does not set page-wide typography or backgrounds. Customize its `--ngb-*` CSS
variables after the import. See [PUBLISHING.md](./PUBLISHING.md) for release
instructions.

Import standalone components from `ngblock` and bind their outputs to
application state:

```ts
import { Component, signal } from '@angular/core';
import { ButtonTextComponent, TextFieldFormComponent } from 'ngblock';

@Component({
  imports: [ButtonTextComponent, TextFieldFormComponent],
  template: `
    <ngb-text-field-form label="Name" [value]="name()" (changed)="name.set($event)" />
    <ngb-button-text-control (clicked)="save()">Save</ngb-button-text-control>
  `,
})
export class ProfileComponent {
  readonly name = signal('');

  save(): void {}
}
```

### API overview

- **Overlay:** `DialogOverlayComponent` and `DrawerOverlayComponent` take
  `open` and required `title` inputs and emit `closed`. Both close on Escape;
  dialogs also close from the backdrop. The parent owns the open state. Dialog
  semantics do not provide a focus trap. `ConfirmDialogOverlayComponent` takes
  `open`, required `title` and `message`, optional action labels, and emits
  `confirmed` or `cancelled`. `PopoverOverlayComponent` toggles its projected
  region from a labelled trigger. `TooltipOverlayComponent` shows required
  `text` on hover or focus.
- **Message:** `AlertMessageComponent` accepts `info`, `success`, `warning`,
  or `error` and provides live-region semantics. `BadgeMessageComponent`
  accepts `neutral`, `success`, `warning`, or `danger`. `ProgressMessageComponent`
  wraps native progress with `value`, `max`, and accessible `label`.
  `SpinnerMessageComponent` announces its `label`; `SkeletonMessageComponent`
  renders configurable loading lines. `ToastMessageComponent` renders a live
  notification and emits `dismissed`.
- **Menu:** `DropdownMenuComponent` takes a `label`, toggles projected menu
  items, and closes on Escape. `BreadcrumbMenuComponent` takes
  `BreadcrumbItem[]` and marks the last item as the current page. `TabsMenuComponent`
  takes `MenuTab[]` (`id`, `label`, `content`) and emits the selected ID.
  `AccordionMenuComponent` takes `AccordionItem[]` (`title`, `content`) and
  toggles its expanded item. `MenubarMenuComponent` renders labelled
  navigation from `MenuBarItem[]`. `StepsMenuComponent` renders a controlled
  step list from `MenuStep[]` and emits prior-step selections.
- **Layout:** `CardLayoutComponent` projects content beneath a required
  `title`. `ContainerLayoutComponent` accepts `small`, `medium`, `large`, or
  `full` sizing. `DividerLayoutComponent` accepts `horizontal` or `vertical`.
  `StackLayoutComponent` accepts `horizontal` or `vertical` direction and a
  CSS `gap`. `ToolbarLayoutComponent` provides a labelled semantic toolbar.
  `PanelLayoutComponent` provides a titled section with optional collapsing.
- **Form:** Text field and textarea bind native fields and emit string values.
  Select takes `SelectOption[]` (`label`, `value`); radio group takes a
  required label and `RadioOption[]` (`label`, `value`). Switch and checkbox
  emit checked state. Password has a visibility toggle; number emits a number
  or `null`; date picker emits a native `YYYY-MM-DD` value; multi-select takes
  `MultiSelectOption[]` and emits selected string values; file upload emits
  selected `File[]` without uploading them; rating emits an integer; slider
  emits a number. `AutocompleteFormComponent` uses a native datalist and emits
  typed values. `ColorPickerFormComponent` wraps the native color input.
  `ListboxFormComponent` renders a native single-select listbox. Native input
  semantics and constraints are preserved.
- **Data:** Table takes required `DataColumn[]` (`key`, `header`) and optional
  `DataRow[]` of string/number values. List renders ordered or unordered string
  items. Avatar shows a supplied image or accessible initials. Empty state
  takes a title, optional description, and projected actions. Paginator takes
  `total`, `pageSize`, and the zero-based current `page`, then emits valid
  page indices. Timeline takes events with a title and optional description
  and date. Carousel provides slide navigation, image renders required
  alternative text with an optional caption, and tree renders hierarchical
  groups.
- **Control:** Text and icon buttons expose native button type and disabled
  inputs and emit click events. The icon button takes a required accessible
  name; `ButtonIcon` lists supported glyph names. Button group labels projected
  controls. Link takes an `href` and supports safe external links. Toggle
  button takes `pressed` and emits the next state. Split button combines a
  primary action with a menu of labelled secondary actions.
- **Message:** `ChipMessageComponent` renders a labelled chip and can emit a
  removal request.
- **Misc:** Icon displays a decorative glyph hidden from assistive technology.

Most components intentionally use browser-native styling and semantics.
`apps/showcase` is a runnable, styled example composed from the library.

## Develop

```bash
npm exec -- nx test ngblock
npm exec -- nx lint ngblock
npm exec -- nx build ngblock
npm exec -- nx build-storybook ngblock
npm exec -- nx serve showcase
```

Storybook runs at `http://localhost:4400`. The showcase app runs at
`http://localhost:4200`.

The inventory is informed by the broad categories represented in
[PrimeNG's component catalog](https://primeng.org/components). ngblock is an
independent library with its own API and implementations; this is a practical
selection, not a one-to-one port of PrimeNG.
