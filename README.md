# ngblock

An Angular UI library of standalone components for overlays, messages, menus,
layout, forms, data, and controls. The component package is in
[packages/ngblock](./packages/ngblock/README.md). The standalone
`ngblock-docs` application is the official documentation site; it presents the
component catalog, API reference, and usage examples. The catalog contains 76
component pairs informed by the
breadth of libraries such as [PrimeNG](https://primeng.org/components), while
keeping ngblock's own standalone APIs and implementations.

## View the documentation

```bash
npm exec -- nx serve ngblock-docs
```

Open `http://localhost:4300`. The app has an interactive component reference
for all 76 component families, installation and theming instructions, and a
live usage example. Build the deployable static site with:

```bash
npm exec -- nx build ngblock-docs
```

The generated site is written to `dist/apps/ngblock-docs/browser`.
For GitHub Pages, build with the repository path and publish the contents of
that directory to the repository's `docs/` folder:

```bash
npm exec -- nx build ngblock-docs --base-href=/ngblock/
```

In the repository's Pages settings, select the `main` branch and `/docs` as the
publishing source.

## Develop the library

```bash
npm exec -- nx test ngblock
npm exec -- nx lint ngblock
npm exec -- nx build ngblock
npm exec -- nx storybook ngblock
npm exec -- nx build-storybook ngblock
```

Storybook remains available for isolated component development.

The published package includes its opt-in component theme at
`node_modules/ngblock/styles.css`. See
[package documentation](./packages/ngblock/README.md) for installation,
component APIs, theming, and the [npm release checklist](./packages/ngblock/PUBLISHING.md).
