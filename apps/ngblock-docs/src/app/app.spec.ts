import { ButtonTextComponent, ButtonTextSmartComponent } from '@org/ngblock';
import { parseComponentReference } from './component-reference';
import { getComponentPreview } from './component-preview.registry';

describe('parseComponentReference', () => {
  it('parses component rows and preserves pipes inside API cells', () => {
    const markdown = `## Component reference
### Forms
| Selector | Description | Inputs and events |
| --- | --- | --- |
| \`ngb-number-form\` | Numeric input. | Required \`label\`; emits \`changed: number | null\`. |
### Coverage boundaries
### Data display
| \`ngb-avatar-data\` | Avatar with initials. | Required \`name\`. |
## Develop
`;

    expect(parseComponentReference(markdown)).toEqual([
      {
        category: 'Form',
        selector: 'ngb-number-form',
        dumbSelector: 'ngb-number-form',
        smartSelector: 'ngb-number-form-smart',
        name: 'Number',
        description: 'Numeric input.',
        inputsAndEvents: 'Required `label`; emits `changed: number | null`.',
      },
      {
        category: 'Data',
        selector: 'ngb-avatar-data',
        dumbSelector: 'ngb-avatar-data',
        smartSelector: 'ngb-avatar-data-smart',
        name: 'Avatar',
        description: 'Avatar with initials.',
        inputsAndEvents: 'Required `name`.',
      },
    ]);
  });

  it('pairs smart reference selectors and preserves menu names', () => {
    const markdown = `## Component reference
### Menus and navigation
| \`ngb-command-menu-smart\` | Searchable commands. | Required \`items\`. |
| \`ngb-context-menu\` | Action menu. | Required \`items\`. |
`;

    expect(
      parseComponentReference(markdown).map(
        ({ name, dumbSelector, smartSelector }) => ({
          name,
          dumbSelector,
          smartSelector,
        }),
      ),
    ).toEqual([
      {
        name: 'Command Menu',
        dumbSelector: 'ngb-command-menu',
        smartSelector: 'ngb-command-menu-smart',
      },
      {
        name: 'Context Menu',
        dumbSelector: 'ngb-context-menu',
        smartSelector: 'ngb-context-menu-smart',
      },
    ]);
  });
});

describe('getComponentPreview', () => {
  it('returns actual dumb and smart components with their example content', () => {
    const dumb = getComponentPreview('ngb-button-text-control-smart', 'dumb');
    const smart = getComponentPreview('ngb-button-text-control-smart', 'smart');

    expect(dumb?.component).toBe(ButtonTextComponent);
    expect(smart?.component).toBe(ButtonTextSmartComponent);
    expect(dumb?.content).toBe('Button');
    expect(smart?.content).toBe('Button');
  });

  it('returns null when the reference has no preview', () => {
    expect(getComponentPreview('ngb-unknown-smart', 'smart')).toBeNull();
  });
});
