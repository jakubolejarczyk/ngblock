# ngblock

An Angular UI library of standalone components for overlays, messages, menus,
layout, forms, data, and controls. The component package is in
[packages/ngblock](./packages/ngblock/README.md); its Storybook includes
interactive examples for each component and a single-page presentation of the
full catalog. The current catalog contains 64 components informed by the
breadth of libraries such as [PrimeNG](https://primeng.org/components), while
keeping ngblock's own standalone APIs and implementations.

## Run the component presentation

```bash
npm exec -- nx storybook ngblock
```

Open `http://localhost:4400` and select **Showcase / All Components** to see
the components together in one interactive page.

## Develop the library

```bash
npm exec -- nx test ngblock
npm exec -- nx lint ngblock
npm exec -- nx build ngblock
npm exec -- nx build-storybook ngblock
npm exec -- nx storybook ngblock
```

Storybook runs at `http://localhost:4400`; build its static site with
`npm exec -- nx build-storybook ngblock`.

The published package includes its opt-in component theme at
`node_modules/ngblock/styles.css`. See
[package documentation](./packages/ngblock/README.md) for installation,
component APIs, theming, and the [npm release checklist](./packages/ngblock/PUBLISHING.md).
