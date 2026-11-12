# ngblock

An Angular UI library of standalone, native-element-first components. The
library covers common interface building blocks rather than every specialized
widget an application might need; components compose with native HTML and can
be styled by the consuming application.

## Component catalog

| Group   | Components                                                                                                                                                                                                   |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Overlay | Confirmation dialog, dialog, drawer, popover, tooltip                                                                                                                                                        |
| Message | Alert, badge, chip, progress, skeleton, spinner, toast                                                                                                                                                       |
| Menu    | Accordion, breadcrumb, context menu, dropdown, menubar, responsive navigation, steps, tabs                                                                                                                   |
| Layout  | Card, container, divider, flex, grid, panel, stack, toolbar                                                                                                                                                  |
| Form    | Autocomplete, color picker, date picker, date-range picker, file upload, form field, listbox, multi-select, number, password, radio group, rating, select, slider, switch, text field, textarea, time picker |
| Data    | Avatar, carousel, empty state, image, list, paginator, table, timeline, tree                                                                                                                                 |
| Control | Button group, checkbox, icon button, link, split button, text button, toggle button                                                                                                                          |
| Misc    | Icon                                                                                                                                                                                                         |

The inventory review identified reusable gaps, now included in the
catalog: a form-field wrapper for labels and validation messages, date-range
and time pickers, an action-based context menu, responsive navigation, and
flexible flex and grid layout primitives. These fill common application needs
without claiming to cover specialized widgets such as rich text editors.

Components live under `src/lib/components/dumb/<group>/<component>/` or
`src/lib/components/smart/<group>/<component>/` and use the
`<component-name>.<type>.<extension>` naming convention. Dumb components render
UI and emit user interactions; smart components coordinate data and application
logic. The current component catalog is presentational and lives under `dumb`.
Components are exported from the package entry point, have focused specs in the
`dumb` tree, and have individual Storybook stories in the matching `smart` tree.
The workspace demo app shows the full component catalog together. Smart
components compose their dumb counterpart, own controlled interaction state,
and forward user events to the consuming application.

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
variables after the import, globally or on an element wrapping your components.
The SCSS source is organized into feature partials under `src/styles/` and
assembled by `src/styles.scss`; the package build compiles it to `styles.css`.
For example:

```css
:root {
  --ngb-color-primary: #0f766e;
  --ngb-color-primary-hover: #115e59;
  --ngb-color-primary-soft: #ccfbf1;
  --ngb-color-canvas: #f0fdfa;
  --ngb-color-text: #134e4a;
  --ngb-color-border: #99f6e4;
  --ngb-focus-ring: 0 0 0 3px rgb(15 118 110 / 0.25);
}
```

The palette includes semantic tokens for primary, success, warning, danger,
info, muted text, borders, overlays, focus, radii, shadows, and component
surfaces. The demo app's **Use ocean palette** button
demonstrates scoping overrides to one page region. See
[PUBLISHING.md](./PUBLISHING.md) for release instructions.

| Category          | CSS variables                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Base              | `--ngb-font-family`, `--ngb-color-canvas`, `--ngb-color-text`, `--ngb-color-muted`, `--ngb-color-border`                                                                                                                                                                                                                                                                                                                                                  |
| Primary           | `--ngb-color-primary`, `--ngb-color-primary-hover`, `--ngb-color-primary-soft`, `--ngb-color-on-primary`, `--ngb-focus-ring`                                                                                                                                                                                                                                                                                                                              |
| Status            | `--ngb-color-info*`, `--ngb-color-success*`, `--ngb-color-warning*`, `--ngb-color-danger*`                                                                                                                                                                                                                                                                                                                                                                |
| Component colors  | `--ngb-color-canvas-subtle`, `--ngb-color-text-subtle`, `--ngb-color-placeholder`, `--ngb-color-disabled`, `--ngb-color-rating`, `--ngb-color-table-border`, `--ngb-color-row-hover`, `--ngb-color-avatar`, `--ngb-color-avatar-text`, `--ngb-color-empty-state-border`, `--ngb-color-carousel-heading`, `--ngb-color-tooltip`, `--ngb-color-progress-track`, `--ngb-color-dialog-backdrop`, `--ngb-color-drawer-backdrop`, `--ngb-color-overlay-divider` |
| Shape and effects | `--ngb-radius-*`, `--ngb-shadow-*`, `--ngb-gradient-carousel`, `--ngb-gradient-progress`                                                                                                                                                                                                                                                                                                                                                                  |

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

## Component reference

All components are standalone and exported from `ngblock`. Required inputs are
marked **required**; other inputs have defaults. Events are Angular outputs.
Unless noted otherwise, stateful inputs are initialized from the supplied
value, and an emitted event should be written back by the application when it
needs to keep the value controlled.

### Overlays

| Selector                     | Description                                                                                  | Inputs and events                                                                                                                  |
| ---------------------------- | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `ngb-confirm-dialog-overlay` | Modal confirmation prompt with cancel and confirm actions.                                   | `open` (false), required `title`, `message`, `confirmLabel` (`Confirm`), `cancelLabel` (`Cancel`); emits `confirmed`, `cancelled`. |
| `ngb-dialog-overlay`         | Modal dialog with projected content; closes on Escape or backdrop click. Parent owns `open`. | `open` (false), required `title`; emits `closed`.                                                                                  |
| `ngb-drawer-overlay`         | Modal side panel with projected content; closes on Escape or backdrop click.                 | `open` (false), required `title`, `side` (`left` or `right`, defaults to `right`); emits `closed`.                                 |
| `ngb-popover-overlay`        | Labelled trigger that toggles a projected popover region.                                    | `label` (`More information`).                                                                                                      |
| `ngb-tooltip-overlay`        | Displays short helper text on hover or keyboard focus.                                       | Required `text`.                                                                                                                   |

Dialog and drawer markup includes modal semantics but does not implement a focus
trap. Manage focus and restore it in the application when required.

### Messages and feedback

| Selector               | Description                                         | Inputs and events                                                                                                                 |
| ---------------------- | --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `ngb-alert-message`    | Inline status/alert region for contextual feedback. | `type`: `info`, `success`, `warning`, or `error` (defaults to `info`).                                                            |
| `ngb-badge-message`    | Compact status badge.                               | `tone`: `neutral`, `success`, `warning`, or `danger` (defaults to `neutral`).                                                     |
| `ngb-chip-message`     | Label chip with optional removal action.            | Required `label`, `removable` (false); emits `removed` when removal is requested.                                                 |
| `ngb-progress-message` | Accessible native progress indicator.               | `value` (0), `max` (100), `label` (`Progress`).                                                                                   |
| `ngb-skeleton-message` | Loading placeholder made of configurable lines.     | `lines` (3).                                                                                                                      |
| `ngb-spinner-message`  | Busy indicator with an accessible announcement.     | `label` (`Loading`).                                                                                                              |
| `ngb-toast-message`    | Live notification with optional dismiss control.    | Required `title`, `type` (`info`, `success`, `warning`, or `error`; defaults to `info`), `dismissible` (true); emits `dismissed`. |

### Menus and navigation

| Selector                         | Description                                                          | Inputs and events                                                                                                                              |
| -------------------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `ngb-context-menu`               | Button-triggered action menu with disabled-item support.             | `label` (`More actions`), required `items: ContextMenuItem[]`; emits `selected: ContextMenuItem`.                                              |
| `ngb-accordion-menu`             | Expand/collapse sections; one section is expanded at a time.         | Required `items: AccordionItem[]`, each with `title` and `content`.                                                                            |
| `ngb-breadcrumb-menu`            | Breadcrumb navigation; the last item is marked as the current page.  | Required `items: BreadcrumbItem[]`, each with `label` and optional `href`.                                                                     |
| `ngb-dropdown-menu`              | Trigger for a projected menu; closes on Escape.                      | `label` (`Menu`); project menu items as children.                                                                                              |
| `ngb-menubar-menu`               | Horizontal navigation links.                                         | Required `items: MenuBarItem[]`, each with `label` and optional `href`.                                                                        |
| `ngb-responsive-navigation-menu` | Inline desktop navigation with a mobile hamburger menu.              | `label` (`Main navigation`), `menuLabel` (`Menu`), required `items: ResponsiveNavigationItem[]` (`label`, `href`).                             |
| `ngb-steps-menu`                 | Step navigation with a controlled active index.                      | Required `steps: MenuStep[]` (`label`, optional `description`), `activeIndex` (0); emits `activeIndexChange` when an earlier step is selected. |
| `ngb-tabs-menu`                  | Tab list and associated panels; selection is reported to the parent. | Required `tabs: MenuTab[]` (`id`, `label`, `content`); emits the selected tab ID through `selected`.                                           |

### Layout

| Selector               | Description                                                     | Inputs and events                                                                                         |
| ---------------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `ngb-card-layout`      | Titled card that projects arbitrary content.                    | Required `title`.                                                                                         |
| `ngb-container-layout` | Centered responsive content width.                              | `size`: `small`, `medium`, `large`, or `full` (defaults to `large`).                                      |
| `ngb-divider-layout`   | Semantic horizontal or vertical separator.                      | `orientation`: `horizontal` or `vertical` (defaults to `horizontal`).                                     |
| `ngb-flex-layout`      | Configurable flex row/column with wrapping and alignment.       | `direction` (`row`), `wrap` (`wrap`), `justify` (`start`), `align` (`center`), `gap` (`1rem`).            |
| `ngb-grid-layout`      | Responsive auto-fit grid that reflows based on available width. | `minItemWidth` (`16rem`), `gap` (`1rem`).                                                                 |
| `ngb-panel-layout`     | Titled section with optional collapse control.                  | Required `title`, `collapsible` (false).                                                                  |
| `ngb-stack-layout`     | Flex stack for vertically or horizontally arranged content.     | `direction`: `vertical` or `horizontal` (defaults to `vertical`), `gap` (CSS length, defaults to `1rem`). |
| `ngb-toolbar-layout`   | Labelled semantic toolbar for projected controls.               | `label` (`Toolbar`).                                                                                      |

### Forms

Form components use native HTML controls and preserve their keyboard,
validation, and input semantics. Change outputs report user edits; set the
corresponding input to keep a form value synchronized.

| Selector                     | Description                                                 | Inputs and events                                                                                                                                        |
| ---------------------------- | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ngb-date-range-picker-form` | Two native date inputs for a date range.                    | Required `label`, `start` and `end` (empty), `min`, `max` (empty), `disabled` (false); emits `changed: { start, end }`.                                  |
| `ngb-autocomplete-form`      | Text input with a native datalist of suggestions.           | Required `label`, `options: string[]`, `value` (empty), `placeholder` (empty); emits `changed: string`.                                                  |
| `ngb-color-picker-form`      | Native color input.                                         | Required `label`, `value` (`#3b82f6`); emits `changed: string`.                                                                                          |
| `ngb-date-picker-form`       | Native date input; values use `YYYY-MM-DD`.                 | Required `label`, `value`, `min`, `max` (empty), `disabled` (false); emits `changed: string`.                                                            |
| `ngb-file-upload-form`       | Native file chooser; selection is reported, not uploaded.   | Required `label`, `accept` (empty), `multiple` (false), `disabled` (false); emits selected files as `selected: readonly File[]`.                         |
| `ngb-form-field-form`        | Reusable label, projected control, hint, and error wrapper. | Required `label`, `controlId`; `hint`, `error` (empty), `required` (false); project a control marked `ngbFieldControl` with matching `id`.               |
| `ngb-listbox-form`           | Native single-selection listbox.                            | Required `label`, `options: ListboxOption[]` (`label`, `value`), `value` (empty); emits `changed: string`.                                               |
| `ngb-multi-select-form`      | Native multiple-selection list.                             | Required `label`, `options: MultiSelectOption[]` (`label`, `value`), `value` (empty array), `disabled` (false); emits `changed: readonly string[]`.      |
| `ngb-number-form`            | Numeric input with optional bounds.                         | Required `label`, `value`, `min`, `max` (null), `step` (1), `disabled` (false); emits `changed: number                                                   | null`. |
| `ngb-password-form`          | Password field with a show/hide control.                    | Required `label`, `value` and `placeholder` (empty), `disabled` (false); emits `changed: string`.                                                        |
| `ngb-radio-group-form`       | Labeled native radio group.                                 | Required `label`, `options: RadioOption[]` (`label`, `value`), `name` (`ngb-radio-group`), `value` (empty), `disabled` (false); emits `changed: string`. |
| `ngb-rating-form`            | Selectable star rating.                                     | `label` (`Rating`), `value` (0), `max` (5), `disabled` (false); emits `changed: number`.                                                                 |
| `ngb-select-form`            | Native single-selection dropdown.                           | Required `label`, `options: SelectOption[]` (`label`, `value`), `value` (empty), `disabled` and `required` (false); emits `changed: string`.             |
| `ngb-slider-form`            | Native range slider.                                        | Required `label`, `value` (50), `min` (0), `max` (100), `step` (1); emits `changed: number`.                                                             |
| `ngb-switch-form`            | Labeled native switch.                                      | Required `label`, `checked` and `disabled` (false); emits `changed: boolean`.                                                                            |
| `ngb-text-field-form`        | Labeled text input.                                         | Required `label`, `value` and `placeholder` (empty), `type` (`text`), `disabled` and `required` (false); emits `changed: string`.                        |
| `ngb-time-picker-form`       | Native time input with optional bounds and step.            | Required `label`, `value`, `min`, `max` (empty), `step` (60 seconds), `disabled` (false); emits `changed: string`.                                       |
| `ngb-textarea-form`          | Labeled multiline text field.                               | Required `label`, `value` and `placeholder` (empty), `rows` (4), `disabled` and `required` (false); emits `changed: string`.                             |

### Recommended future additions

The component inventory now includes the commonly reusable form-field, date
range, time, and action-menu patterns. Specialized widgets such as a calendar
with month navigation, a virtualized data grid, a drag-and-drop upload zone,
and a rich-text editor are intentionally not included: they need larger
interaction and accessibility contracts and are better added when a consuming
application requires them.

### Data display

| Selector               | Description                                                                                | Inputs and events                                                                                                                 |
| ---------------------- | ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| `ngb-avatar-data`      | Avatar image or initials derived from the supplied name.                                   | Required `name`, optional `src` (empty).                                                                                          |
| `ngb-carousel-data`    | Slide presentation with previous/next and slide selection controls.                        | Required `slides: CarouselSlide[]` (`title`, optional `description`).                                                             |
| `ngb-empty-state-data` | Empty-result message with optional description and projected actions.                      | Required `title`, `description` (empty).                                                                                          |
| `ngb-image-data`       | Responsive image with required alternative text and optional caption.                      | Required `src`, `alt`; `caption` (empty).                                                                                         |
| `ngb-list-data`        | Ordered or unordered list of text items.                                                   | Required `items: string[]`, `ordered` (false).                                                                                    |
| `ngb-paginator-data`   | Page navigation for a collection. `page` is zero-based and `total` is the number of items. | Required `total`, `pageSize` (10), `page` (0); emits valid zero-based indices through `pageChange`.                               |
| `ngb-table-data`       | Accessible table from column definitions and key/value rows.                               | Required `columns: DataColumn[]` (`key`, `header`), `rows: DataRow[]` (empty; values are strings or numbers), `caption` (`Data`). |
| `ngb-timeline-data`    | Chronological event list.                                                                  | Required `events: TimelineEvent[]` (`title`, optional `description` and `date`).                                                  |
| `ngb-tree-data`        | Hierarchical tree of labelled nodes.                                                       | Required `nodes: TreeNode[]` (`label`, optional recursive `children`).                                                            |

### Controls

| Selector                    | Description                                                                         | Inputs and events                                                                                                                                                                                                                     |
| --------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ngb-button-group-control`  | Labelled group for projected related actions.                                       | `label` (`Actions`).                                                                                                                                                                                                                  |
| `ngb-button-icon-control`   | Icon-only button with a required accessible name.                                   | Required `icon: ButtonIcon` and `ariaLabel`; `type` (`button`), `disabled` (false); emits the native click event through `clicked`. Icons: `add`, `check`, `close`, `delete`, `edit`, `favorite`, `home`, `menu`, `remove`, `search`. |
| `ngb-button-text-control`   | Text button with native button type and disabled behavior.                          | `type` (`button`), `disabled` (false); projects its label and emits the native click event through `clicked`.                                                                                                                         |
| `ngb-checkbox-control`      | Checkbox with projected label content.                                              | `checked` and `disabled` (false); emits `changed: boolean`.                                                                                                                                                                           |
| `ngb-link-control`          | Link to an application or external URL. External links use safe new-tab attributes. | Required `href`, `external` (false); projects link text.                                                                                                                                                                              |
| `ngb-split-button-control`  | Primary action paired with a menu of secondary actions.                             | Required `label`, `options: SplitButtonOption[]` (`label`, `value`); emits the selected value through `action`.                                                                                                                       |
| `ngb-toggle-button-control` | Two-state pressed/unpressed button.                                                 | `pressed` and `disabled` (false); emits the requested state through `changed: boolean`.                                                                                                                                               |

### Miscellaneous

| Selector   | Description                                                                                                                | Inputs and events |
| ---------- | -------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `ngb-icon` | Decorative glyph hidden from assistive technology; pair it with visible text or an accessible label on its parent control. | Required `glyph`. |

Storybook provides isolated interactive examples for each component and an
all-in-one presentation page.

## Develop

```bash
npm exec -- nx test ngblock
npm exec -- nx lint ngblock
npm exec -- nx build ngblock
npm exec -- nx build-storybook ngblock
```

Storybook runs at `http://localhost:4400`.

The inventory is informed by the broad categories represented in
[PrimeNG's component catalog](https://primeng.org/components). ngblock is an
independent library with its own API and implementations; this is a practical
selection, not a one-to-one port of PrimeNG.
