export interface ComponentReference {
  readonly category: string;
  readonly selector: string;
  readonly dumbSelector: string;
  readonly smartSelector: string;
  readonly name: string;
  readonly description: string;
  readonly inputsAndEvents: string;
}

const categoryNames = new Map<string, string>([
  ['Overlays', 'Overlay'],
  ['Messages and feedback', 'Message'],
  ['Menus and navigation', 'Menu'],
  ['Layout', 'Layout'],
  ['Forms', 'Form'],
  ['Data display', 'Data'],
  ['Controls', 'Control'],
  ['Miscellaneous', 'Misc'],
]);

const specialComponentNames = new Map([
  ['ngb-command-menu-smart', 'Command Menu'],
  ['ngb-context-menu', 'Context Menu'],
]);

export function parseComponentReference(markdown: string): ComponentReference[] {
  const components: ComponentReference[] = [];
  let readingReference = false;
  let category = '';

  for (const line of markdown.split(/\r?\n/)) {
    if (line.startsWith('## ')) {
      if (line === '## Component reference') {
        readingReference = true;
        continue;
      }
      if (readingReference) {
        break;
      }
    }

    if (!readingReference) {
      continue;
    }

    const heading = line.match(/^### (.+)$/);
    if (heading) {
      category = categoryNames.get(heading[1]) ?? '';
      continue;
    }

    if (!category || !line.startsWith('| `ngb-')) {
      continue;
    }

    const selectorEnd = line.indexOf('|', 1);
    const descriptionEnd = line.indexOf('|', selectorEnd + 1);
    const rowEnd = line.lastIndexOf('|');
    if (selectorEnd < 0 || descriptionEnd < 0 || rowEnd <= descriptionEnd) {
      throw new Error(`Malformed component reference row: ${line}`);
    }

    const selector = line
      .slice(1, selectorEnd)
      .trim()
      .replace(/^`|`$/g, '');
    const dumbSelector = selector.replace(/-smart$/, '');
    const description = line.slice(selectorEnd + 1, descriptionEnd).trim();
    const inputsAndEvents = line.slice(descriptionEnd + 1, rowEnd).trim();

    components.push({
      category,
      selector,
      dumbSelector,
      smartSelector: `${dumbSelector}-smart`,
      name: componentName(selector),
      description,
      inputsAndEvents,
    });
  }

  if (components.length === 0) {
    throw new Error('No component entries were found in the package reference.');
  }

  return components;
}

function componentName(selector: string): string {
  const specialName = specialComponentNames.get(selector);
  if (specialName) {
    return specialName;
  }

  const name = selector
    .replace(/^ngb-/, '')
    .replace(/-smart$/, '')
    .replace(/-(overlay|message|menu|layout|form|data|control)$/, '');

  return name
    .split('-')
    .map((word) =>
      word === 'otp' ? 'OTP' : `${word.charAt(0).toUpperCase()}${word.slice(1)}`,
    )
    .join(' ');
}
