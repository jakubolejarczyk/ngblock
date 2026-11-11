# Publishing ngblock to npm

This package is published from the Angular Package Format output generated in
`dist/packages/ngblock`. Do not publish the source folder.

## Before each release

1. Select the next semantic version. Use a patch for compatible fixes, a minor
   for new backwards-compatible components, and a major for breaking API
   changes.
2. Update `version` in `packages/ngblock/package.json` and add a matching
   entry to `packages/ngblock/CHANGELOG.md`.
3. Confirm the npm package name and latest published version:

   ```bash
   npm view ngblock name version dist-tags --json
   ```

4. Run all release checks from the workspace root:

   ```bash
   npm exec -- nx run-many --targets=test,lint,build,build-storybook --projects=ngblock
   ```

5. Inspect the exact package contents without publishing:

   ```bash
   cd dist/packages/ngblock
   npm pack --dry-run
   ```

   Confirm that the manifest, declaration files, FESM bundle, `styles.css`,
   `README.md`, `CHANGELOG.md`, `PUBLISHING.md`, and MIT `LICENSE` are included,
   and that tests, stories, workspace files, and secrets are not.

## Publish

After review and approval, authenticate to npm and publish the verified build:

```bash
npm whoami
npm publish --access public
```

Run these commands from `dist/packages/ngblock`. Publishing is intentionally
not part of the build or release-check commands.

## Verify the release

```bash
npm view ngblock version dist-tags --json
```

Install the published version in a clean Angular application and verify that
standalone component imports and the documented global stylesheet both resolve.

## Theme

The library stylesheet is published as `styles.css`. Add it to the consuming
Angular application's global styles after any CSS reset:

```json
{
  "styles": ["node_modules/ngblock/styles.css", "src/styles.css"]
}
```

The theme is opt-in. It styles the ngblock custom-element hosts and their
native controls; it does not impose page-wide typography or backgrounds.
Override the `--ngb-*` CSS custom properties after importing the theme to
customize colors, borders, radii, focus rings, and shadows.
