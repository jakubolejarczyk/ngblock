# ngblock

This is a minimal Nx Angular workspace containing a single Angular library named `ngblock`.

## Project

- `ngblock` — the library in `packages/ngblock`

## Getting started

```bash
npm install
npx nx build ngblock
npx nx test ngblock
npx nx lint ngblock
```

## Storybook

Start the component workbench locally:

```bash
npx nx storybook ngblock
```

Then open `http://localhost:4400`. Build a static Storybook site with:

```bash
npx nx build-storybook ngblock
```

Button examples are in `packages/ngblock/src/lib/control/button.stories.ts`.

## Library import

```ts
import { ButtonComponent } from 'ngblock';
```

The workspace has been cleaned up to remove the default generated demo apps and libraries and only keeps the base Angular library you asked for.

## 🎯 Adding New Features

### Generate a new Angular application:

```bash
npx nx g @nx/angular:app my-app
```

### Generate a new Angular library:

```bash
npx nx g @nx/angular:lib my-lib
```

### Generate a new Angular component:

```bash
npx nx g @nx/angular:component my-component --project=my-lib
```

### Generate a new API library:

```bash
npx nx g @nx/node:lib my-api-lib
```

You can use `npx nx list` to see all available plugins and `npx nx list <plugin-name>` to see all generators for a specific plugin.

## Nx Cloud

Nx Cloud ensures a [fast and scalable CI](https://nx.dev/nx-cloud?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) pipeline. It includes features such as:

- [Remote caching](https://nx.dev/docs/features/ci-features/remote-cache?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Task distribution across multiple machines](https://nx.dev/docs/features/ci-features/distribute-task-execution?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Automated e2e test splitting](https://nx.dev/docs/features/ci-features/split-e2e-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Task flakiness detection and rerunning](https://nx.dev/docs/features/ci-features/flaky-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/docs/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## 🔗 Learn More

- [Nx Documentation](https://nx.dev/docs)
- [Angular Monorepo Tutorial](https://nx.dev/docs/getting-started/tutorials/angular-monorepo-tutorial)
- [Module Boundaries](https://nx.dev/docs/features/enforce-module-boundaries)
- [Docker Integration](https://nx.dev/docs/guides/nx-release/release-docker-images)
- [Playwright Testing](https://nx.dev/docs/technologies/test-tools/playwright)
- [Vite with Angular](https://nx.dev/docs/technologies/build-tools/vite)
- [Nx Cloud](https://nx.dev/nx-cloud)
- [Releasing Packages](https://nx.dev/docs/features/manage-releases)

## 💬 Community

Join the Nx community:

- [Discord](https://go.nx.dev/community)
- [X (Twitter)](https://twitter.com/nxdevtools)
- [LinkedIn](https://www.linkedin.com/company/nrwl)
- [YouTube](https://www.youtube.com/@nxdevtools)
- [Blog](https://nx.dev/blog)
